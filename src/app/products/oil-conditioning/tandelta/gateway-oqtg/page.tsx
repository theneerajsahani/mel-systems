'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function GatewayOQTgPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'TanDelta', href: '/products/oil-conditioning/tandelta' },
        { label: 'Gateway (OQTg)' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Sensor Inputs', value: 'Up to 4 OQSx sensors' },
                { label: 'Communication', value: 'RS485, Modbus RTU/TCP' },
                { label: 'Operating Temperature', value: '-20°C to +60°C' },
                { label: 'Power Supply', value: '24V DC ± 20%' },
                { label: 'Power Consumption', value: '< 8W' },
                { label: 'Ethernet', value: '10/100 Mbps' },
                { label: 'Data Logging', value: '1000+ records' },
                { label: 'Protection Class', value: 'IP20' },
                { label: 'Mounting', value: 'DIN rail' },
                { label: 'Dimensions', value: '90 x 87 x 58 mm' },
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
                                src="/products/oil conditioning/Tandelta/Gateway (OQTg)/Gateway (OQTg).jpg"
                                alt="Gateway (OQTg)"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    Gateway (OQTg)
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Industrial gateway unit for integrating oil quality sensors into existing 
                                    control systems with Modbus communication protocols.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Multi-sensor integration</li>
                                    <li>• Modbus RTU/TCP support</li>
                                    <li>• DIN rail mounting</li>
                                    <li>• Local data logging</li>
                                    <li>• Ethernet connectivity</li>
                                    <li>• Industrial design</li>
                                    <li>• Easy configuration</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Applications</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• SCADA system integration</li>
                                    <li>• PLC connectivity</li>
                                    <li>• Industrial automation</li>
                                    <li>• Central monitoring systems</li>
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
