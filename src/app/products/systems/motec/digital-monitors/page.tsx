'use client';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';

export default function DigitalMonitorsPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Systems', href: '/products/systems' },
        { label: 'Digital Monitors' },
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
                            Digital Monitors
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            High-resolution digital monitors with advanced display technology 
                            for superior image quality and enhanced control features.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <Link href="/products/systems/motec/digital-monitors/mdde1072">
                            <ProductCard
                                image='/products/systems/Motec/Digital Monitors/MDDE1072/MDDE1072.jpg'
                                name='MDDE1072'
                            />
                        </Link>
                        <Link href="/products/systems/motec/digital-monitors/mdde1102">
                            <ProductCard
                                image='/products/systems/Motec/Digital Monitors/MDDE1102/MDDE1102.jpg'
                                name='MDDE1102'
                            />
                        </Link>
                        <Link href="/products/systems/motec/digital-monitors/mdde1122">
                            <ProductCard
                                image='/products/systems/Motec/Digital Monitors/MDDE1122/MDDE1122.jpg'
                                name='MDDE1122'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
