'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OilConditioningPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to TanDelta page by default
        router.replace('/products/oil-conditioning/tandelta');
    }, [router]);

    // Return null or a loading state while redirecting
    return null;
}
