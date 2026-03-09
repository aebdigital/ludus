'use client';

import { useEffect, useRef, useCallback } from 'react';

declare global {
    interface Window {
        turnstile: {
            render: (container: HTMLElement, options: Record<string, unknown>) => string;
            reset: (widgetId: string) => void;
            remove: (widgetId: string) => void;
        };
        onTurnstileLoad?: () => void;
    }
}

const SITE_KEY = '0x4AAAAAACoaJ4LFuYHjdvIw';

interface TurnstileWidgetProps {
    onVerify: (token: string) => void;
    onExpire?: () => void;
}

let scriptLoaded = false;
let scriptLoading = false;
const loadCallbacks: (() => void)[] = [];

function loadTurnstileScript(): Promise<void> {
    if (scriptLoaded) return Promise.resolve();

    return new Promise((resolve) => {
        if (scriptLoading) {
            loadCallbacks.push(resolve);
            return;
        }

        scriptLoading = true;
        loadCallbacks.push(resolve);

        window.onTurnstileLoad = () => {
            scriptLoaded = true;
            scriptLoading = false;
            loadCallbacks.forEach((cb) => cb());
            loadCallbacks.length = 0;
        };

        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    });
}

export default function TurnstileWidget({ onVerify, onExpire }: TurnstileWidgetProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);

    const renderWidget = useCallback(() => {
        if (!containerRef.current || !window.turnstile) return;

        if (widgetIdRef.current !== null) {
            window.turnstile.remove(widgetIdRef.current);
        }

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: SITE_KEY,
            callback: (token: string) => onVerify(token),
            'expired-callback': () => onExpire?.(),
            theme: 'light',
        });
    }, [onVerify, onExpire]);

    useEffect(() => {
        loadTurnstileScript().then(renderWidget);

        return () => {
            if (widgetIdRef.current !== null && window.turnstile) {
                window.turnstile.remove(widgetIdRef.current);
                widgetIdRef.current = null;
            }
        };
    }, [renderWidget]);

    return <div ref={containerRef} className="my-2" />;
}
