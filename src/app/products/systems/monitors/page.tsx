'use client';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';

export default function MonitorsPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Systems', href: '/products/systems' },
        { label: 'Monitors' },
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="py-6">
                    <ProductBreadcrumb items={breadcrumbItems} />
                </div>

                <div className="py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-foreground mb-4">
                            Monitors
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            High-quality LCD monitors designed for vehicle and industrial applications 
                            with rugged construction and excellent visibility in all conditions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <Link href="/products/systems/monitors/md3071a">
                            <ProductCard
                                image='/products/systems/Motec/Monitors/MD3071A/MD3071A.jpg'
                                name='MD3071A'
                            />
                        </Link>
                        <Link href="/products/systems/monitors/md3073">
                            <ProductCard
                                image='/products/systems/Motec/Monitors/MD3073/MD3073.jpg'
                                name='MD3073'
                            />
                        </Link>
                        <Link href="/products/systems/monitors/md3100">
                            <ProductCard
                                image='/products/systems/Motec/Monitors/MD3100/MD3100.jpg'
                                name='MD3100'
                            />
                        </Link>
                        <Link href="/products/systems/monitors/17-zoll-lcd-monitor">
                            <ProductCard
                                image='/products/systems/Motec/Monitors/17 Zoll LCD Monitor/17 Zoll LCD Monitor.jpg'
                                name='17 Zoll LCD Monitor'
                            />
                        </Link>
                        <Link href="/products/systems/monitors/md4074-quad-ip30-ip67">
                            <ProductCard
                                image='/products/systems/Motec/Monitors/MD4074-Quad-IP30 & IP67/MD4074-Quad-IP30 & IP67.jpg'
                                name='MD4074-Quad-IP30 & IP67'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
