import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Chýbajú povinné údaje (Meno, Email, Správa)' },
                { status: 400 }
            );
        }

        // Determine recipient based on subject
        let toEmail = process.env.EMAIL_DIVADLO || 'info@skolaludus.sk'; // Default fallback
        let subjectPrefix = 'Nová správa z webu';

        switch (subject) {
            case 'skola-ludus':
                toEmail = process.env.EMAIL_SKOLA || 'jakubludus@gmail.com';
                subjectPrefix = 'Škola Ludus';
                break;
            case 'ludus-academy':
                toEmail = process.env.EMAIL_ACADEMY || 'info@ludusacademy.sk';
                subjectPrefix = 'Ludus Academy';
                break;
            case 'ludus-tabor':
                toEmail = process.env.EMAIL_TABOR || 'ludustabor@gmail.com';
                subjectPrefix = 'Ludus Tábor';
                break;
            case 'divadlo-ludus':
                toEmail = process.env.EMAIL_DIVADLO || 'info@skolaludus.sk';
                subjectPrefix = 'Divadlo Ludus';
                break;
            case 'ebook-lead':
                toEmail = process.env.EMAIL_ACADEMY || 'info@ludusacademy.sk';
                subjectPrefix = 'E-book Lead';
                break;
            case 'ticket-reservation':
                toEmail = process.env.EMAIL_DIVADLO || 'info@skolaludus.sk';
                subjectPrefix = 'Rezervácia lístka';
                break;
            case 'school-reservation':
                toEmail = process.env.EMAIL_SKOLA || 'jakubludus@gmail.com';
                subjectPrefix = 'Hromadná rezervácia';
                break;
            default:
                toEmail = process.env.EMAIL_DIVADLO || 'info@skolaludus.sk';
        }

        const apiKey = process.env.SMTP2GO_API_KEY;

        if (!apiKey) {
            console.error('SMTP2GO_API_KEY is not defined');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Check if message is an object (for reservations)
        const isReservation = typeof body.message === 'object' || subject.includes('reservation');
        const formattedMessage = isReservation
            ? JSON.stringify(body.message, null, 2)
            : body.message;

        const htmlReservationDetails = isReservation && body.reservationDetails
            ? Object.entries(body.reservationDetails).map(([key, val]) => `<p><strong>${key}:</strong> ${val}</p>`).join('')
            : '';

        // Call SMTP2GO API
        const response = await fetch('https://api.smtp2go.com/v3/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_key: apiKey,
                to: [toEmail],
                sender: process.env.CONTACT_SENDER_EMAIL || 'web@ludus-space.sk',
                subject: `${subjectPrefix}: ${name}`,
                text_body: `
Meno: ${name}
Email: ${email}
Telefón: ${phone || 'Neuvedené'}
Predmet: ${subject}

Správa/Detaily:
${formattedMessage}
        `,
                html_body: `
<h2>Nová správa z webu: ${subjectPrefix}</h2>
<p><strong>Meno:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Telefón:</strong> ${phone || 'Neuvedené'}</p>
<hr/>
${htmlReservationDetails}
<p><strong>Správa:</strong></p>
<p>${formattedMessage.replace(/\n/g, '<br>')}</p>
        `
            }),
        });

        const data = await response.json();

        if (!response.ok || data.data?.error) {
            console.error('SMTP2GO Error:', data);
            return NextResponse.json(
                { error: 'Chyba pri odosielaní emailu' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Interná chyba servera' },
            { status: 500 }
        );
    }
}
