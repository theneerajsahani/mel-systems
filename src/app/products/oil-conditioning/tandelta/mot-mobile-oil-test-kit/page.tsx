'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function MOTMobileOilTestKitPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'TanDelta', href: '/products/oil-conditioning/tandelta' },
        { label: 'MOT – Mobile Oil Test Kit' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Display', value: '7" Color Touchscreen' },
                { label: 'Battery Life', value: '8+ hours continuous operation' },
                { label: 'Operating Temperature', value: '-10°C to +50°C' },
                { label: 'Storage Temperature', value: '-20°C to +70°C' },
                { label: 'Humidity', value: '0-95% RH non-condensing' },
                { label: 'Weight', value: '2.5 kg (5.5 lbs)' },
                { label: 'Dimensions', value: '280 x 210 x 80 mm' },
                { label: 'Connectivity', value: 'Wi-Fi, Bluetooth, USB' },
                { label: 'Data Storage', value: '16GB internal + SD card' },
                { label: 'Protection Class', value: 'IP54' },
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
                                src="/products/oil conditioning/Tandelta/MOT – Mobile Oil Test Kit/MOT – Mobile Oil Test Kit.png"
                                alt="MOT – Mobile Oil Test Kit"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    MOT – Mobile Oil Test Kit
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Portable oil analysis system for on-site testing and real-time oil condition 
                                    monitoring with comprehensive reporting capabilities.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Portable handheld design</li>
                                    <li>• Real-time oil analysis</li>
                                    <li>• 7" color touchscreen</li>
                                    <li>• Wireless connectivity</li>
                                    <li>• Long battery life</li>
                                    <li>• Comprehensive reporting</li>
                                    <li>• Cloud data synchronization</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Applications</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Field service operations</li>
                                    <li>• On-site oil analysis</li>
                                    <li>• Mobile maintenance units</li>
                                    <li>• Remote location monitoring</li>
                                    <li>• Quality control testing</li>
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
