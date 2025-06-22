'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function OQSxG2HAZOilQualitySensorPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'TanDelta', href: '/products/oil-conditioning/tandelta' },
        { label: 'OQSx-G2 HAZ Oil Quality Sensor' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Measurement Range', value: '0.01 - 2000 nF' },
                { label: 'Frequency', value: '0.1 Hz' },
                { label: 'Temperature Range', value: '-40°C to +125°C' },
                { label: 'Pressure Rating', value: '400 bar' },
                { label: 'Housing Material', value: '316L Stainless Steel' },
                { label: 'Thread Connection', value: 'M18 x 1.5' },
                { label: 'Output Signal', value: '4-20 mA, 0-10V, RS485' },
                { label: 'Power Supply', value: '12-30V DC' },
                { label: 'Protection Class', value: 'IP67' },
                { label: 'Hazardous Area Rating', value: 'ATEX Zone 1 & 2' },
                { label: 'Response Time', value: '< 1 second' },
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
                                src="/products/oil conditioning/Tandelta/OQSx-G2 HAZ Oil Quality Sensor/OQSx-G2 HAZ Oil Quality Sensor.jpg"
                                alt="OQSx-G2 HAZ Oil Quality Sensor"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    OQSx-G2 HAZ Oil Quality Sensor
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Hazardous area certified oil quality monitoring sensor with real-time dielectric 
                                    constant measurement for explosive atmospheres and critical applications.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• ATEX Zone 1 & 2 certified</li>
                                    <li>• Real-time oil quality monitoring</li>
                                    <li>• Explosion-proof housing</li>
                                    <li>• Dielectric constant measurement</li>
                                    <li>• Multiple output options</li>
                                    <li>• High temperature and pressure rating</li>
                                    <li>• Stainless steel construction</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Applications</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Offshore oil & gas platforms</li>
                                    <li>• Petrochemical facilities</li>
                                    <li>• Explosive atmosphere environments</li>
                                    <li>• Critical machinery monitoring</li>
                                    <li>• Hazardous area applications</li>
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
