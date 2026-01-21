'use client';

import { useState } from 'react';

interface CookieSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
}

export default function CookieSettingsModal({ isOpen, onClose, onSave }: CookieSettingsModalProps) {
    const [preferences, setPreferences] = useState({
        essential: true, // Always true and disabled
        analytics: false,
        marketing: false
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[2100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-xl w-full max-w-lg p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
                <h2 className="text-2xl font-bold mb-6 text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                    Nastavenia cookies
                </h2>

                <div className="space-y-6 mb-8">
                    {/* Essential */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-bold text-lg mb-1">Nevyhnutné</h4>
                            <p className="text-sm text-gray-500">Tieto cookies sú potrebné pre fungovanie webu.</p>
                        </div>
                        <div className="relative inline-flex h-6 w-11 shrink-0 cursor-not-allowed rounded-full border-2 border-transparent bg-gray-300 transition-colors duration-200 ease-in-out">
                            <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                        </div>
                    </div>

                    {/* Analytics */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-bold text-lg mb-1">Analytické</h4>
                            <p className="text-sm text-gray-500">Pomáhajú nám vylepšovať našu stránku.</p>
                        </div>
                        <button
                            onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${preferences.analytics ? 'bg-[#ffd37c]' : 'bg-gray-200'}`}
                        >
                            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${preferences.analytics ? 'translate-x-5' : 'translate-x-0'}`} />
                        </button>
                    </div>

                    {/* Marketing */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-bold text-lg mb-1">Marketingové</h4>
                            <p className="text-sm text-gray-500">Pre relevantnejšiu reklamu a obsah.</p>
                        </div>
                        <button
                            onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${preferences.marketing ? 'bg-[#ffd37c]' : 'bg-gray-200'}`}
                        >
                            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${preferences.marketing ? 'translate-x-5' : 'translate-x-0'}`} />
                        </button>
                    </div>
                </div>

                <div className="flex gap-4 justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 text-gray-600 hover:text-black font-medium transition-colors"
                    >
                        Zrušiť
                    </button>
                    <button
                        onClick={onSave}
                        className="bg-black text-white px-8 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                    >
                        Uložiť nastavenia
                    </button>
                </div>
            </div>
        </div>
    );
}
