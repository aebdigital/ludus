'use client';

import React from 'react';

interface ProgramScrollButtonProps {
    className?: string;
    children: React.ReactNode;
}

export default function ProgramScrollButton({ className, children }: ProgramScrollButtonProps) {
    const handleScroll = () => {
        if (window.__lenis) {
            window.__lenis.scrollTo('#schedule', {
                duration: 1.5,
                offset: -100
            });
        } else {
            const element = document.getElementById('schedule');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <button
            onClick={handleScroll}
            className={className}
        >
            {children}
        </button>
    );
}
