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
        let toEmail = 'info@skolaludus.sk'; // Default fallback

        switch (subject) {
            case 'skola-ludus':
                toEmail = 'jakubludus@gmail.com';
                break;
            case 'ludus-academy':
                toEmail = 'info@ludusacademy.sk';
                break;
            case 'ludus-tabor':
                toEmail = 'ludustabor@gmail.com';
                break;
            case 'divadlo-ludus':
                // User stated: "zatial nemám email zriadený" (pending), defaulting to info@skolaludus.sk as per previous context or generic
                toEmail = 'info@skolaludus.sk';
                break;
            default:
                toEmail = 'info@skolaludus.sk';
        }

        const apiKey = process.env.SMTP2GO_API_KEY;

        if (!apiKey) {
            console.error('SMTP2GO_API_KEY is not defined');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Call SMTP2GO API
        const response = await fetch('https://api.smtp2go.com/v3/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_key: apiKey,
                to: [toEmail],
                sender: 'noreply@skolaludus.sk', // Ideally this should be a verified sender in SMTP2GO
                subject: `Nová správa z webu: ${subject || 'Všeobecné'}`,
                text_body: `
Meno: ${name}
Email: ${email}
Telefón: ${phone || 'Neuvedené'}
Predmet: ${subject}

Správa:
${message}
        `,
                html_body: `
<h2>Nová správa z kontaktného formulára</h2>
<p><strong>Meno:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Telefón:</strong> ${phone || 'Neuvedené'}</p>
<p><strong>Predmet:</strong> ${subject}</p>
<br/>
<p><strong>Správa:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
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
