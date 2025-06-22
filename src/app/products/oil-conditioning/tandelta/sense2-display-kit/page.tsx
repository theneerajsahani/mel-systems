'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function SENSE2DisplayKitPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'TanDelta', href: '/products/oil-conditioning/tandelta' },
        { label: 'SENSE2 Display Kit' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Display Size', value: '4.3" Color LCD' },
                { label: 'Resolution', value: '480 x 272 pixels' },
                { label: 'Viewing Angle', value: '170° horizontal/vertical' },
                { label: 'Operating Temperature', value: '-20°C to +70°C' },
                { label: 'Power Supply', value: '12-24V DC' },
                { label: 'Power Consumption', value: '< 5W' },
                { label: 'Communication', value: 'RS485, Modbus RTU' },
                { label: 'Protection Class', value: 'IP65' },
                { label: 'Mounting', value: 'Panel mount' },
                { label: 'Dimensions', value: '125 x 95 x 35 mm' },
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
                                src="/products/oil conditioning/Tandelta/SENSE2 Display Kit/SENSE2 Display Kit.jpg"
                                alt="SENSE2 Display Kit"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    SENSE2 Display Kit
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Compact color display unit for local visualization of oil quality data with 
                                    intuitive interface and configurable parameters.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• 4.3" color LCD display</li>
                                    <li>• High resolution graphics</li>
                                    <li>• Intuitive user interface</li>
                                    <li>• Configurable parameters</li>
                                    <li>• Real-time data visualization</li>
                                    <li>• Alarm indication</li>
                                    <li>• Panel mount design</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Applications</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Control room displays</li>
                                    <li>• Local operator interfaces</li>
                                    <li>• Machine status monitoring</li>
                                    <li>• Process visualization</li>
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
