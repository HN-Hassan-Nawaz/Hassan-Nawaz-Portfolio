'use client';
import { useEffect } from 'react';

export default function BootstrapClient() {
    useEffect(() => {
        // Dynamically load Bootstrap JS after hydration
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return null;
}
