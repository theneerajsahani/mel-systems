'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function OQDeG2DisplayExpressPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'TanDelta', href: '/products/oil-conditioning/tandelta' },
        { label: 'OQDe-G2 Display Express' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Display Size', value: '3.5" Color LCD' },
                { label: 'Resolution', value: '320 x 240 pixels' },
                { label: 'Operating Temperature', value: '-10°C to +60°C' },
                { label: 'Power Supply', value: '12-24V DC' },
                { label: 'Power Consumption', value: '< 3W' },
                { label: 'Communication', value: 'RS485' },
                { label: 'Response Time', value: '< 1 second' },
                { label: 'Protection Class', value: 'IP65' },
                { label: 'Mounting', value: 'Panel mount' },
                { label: 'Dimensions', value: '95 x 75 x 30 mm' },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="py-6">
                    <ProductBreadcrumb items={breadcrumbItems} />
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-4">
                            <Image
                                src="/products/oil conditioning/Tandelta/OQDe-G2 Display Express/OQDe-G2 Display Express.jpg"
                                alt="OQDe-G2 Display Express"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    OQDe-G2 Display Express
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Compact display unit for direct connection to oil quality sensors providing 
                                    immediate local readout and basic alarm functions.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Direct sensor connection</li>
                                    <li>• Real-time display</li>
                                    <li>• Compact design</li>
                                    <li>• Simple installation</li>
                                    <li>• Basic alarm functions</li>
                                    <li>• Cost-effective solution</li>
                                    <li>• Easy configuration</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Applications</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Local operator displays</li>
                                    <li>• Simple monitoring systems</li>
                                    <li>• Field installations</li>
                                    <li>• Basic oil quality monitoring</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h2>
                        <TechnicalSpecsTable sections={specifications} />
                    </div>

                    <div className="text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                        >
                            Request Quote
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
