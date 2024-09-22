// pages/success.tsx
import Link from 'next/link';

export default async function SuccessIndex() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-green-500 mb-4">SUCCESS!</h1>
            <p className="text-lg text-gray-700 mb-6">Du hast erfolgreich einen Ort hinzugefügt!</p>
            <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Zurück zur Startseite
            </a>
        </div>
    );
};
