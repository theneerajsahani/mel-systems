'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function OQSXG2SensorKitPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'TanDelta', href: '/products/oil-conditioning/tandelta' },
        { label: 'OQSX-G2 Sensor Kit' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Kit Components', value: 'OQSx-G2 Sensor + Gateway + Display' },
                { label: 'Measurement Range', value: '0.01 - 2000 nF' },
                { label: 'Temperature Range', value: '-40°C to +125°C' },
                { label: 'Pressure Rating', value: '400 bar' },
                { label: 'Communication', value: 'Wireless + Wired Options' },
                { label: 'Display Type', value: '4.3" Color LCD' },
                { label: 'Power Supply', value: '12-30V DC' },
                { label: 'Protection Class', value: 'IP67' },
                { label: 'Installation', value: 'Plug & Play' },
                { label: 'Data Logging', value: 'Yes, with timestamp' },
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
                                src="/products/oil conditioning/Tandelta/OQSX-G2 Sensor kit/OQSX-G2 Sensor kit.jpg"
                                alt="OQSX-G2 Sensor Kit"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    OQSX-G2 Sensor Kit
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Complete oil quality monitoring solution including sensor, gateway, and display 
                                    for comprehensive oil condition analysis and trending.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Complete monitoring solution</li>
                                    <li>• Plug & play installation</li>
                                    <li>• Real-time data display</li>
                                    <li>• Wireless and wired connectivity</li>
                                    <li>• Data logging and trending</li>
                                    <li>• Color LCD display</li>
                                    <li>• Multiple communication protocols</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Kit Includes</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• OQSx-G2 Oil Quality Sensor</li>
                                    <li>• OQTg Gateway unit</li>
                                    <li>• 4.3" Color display</li>
                                    <li>• Connection cables</li>
                                    <li>• Mounting hardware</li>
                                    <li>• Configuration software</li>
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
