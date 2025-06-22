'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function SENSE3GatewayKitPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'TanDelta', href: '/products/oil-conditioning/tandelta' },
        { label: 'SENSE3 Gateway Kit' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Communication Protocols', value: 'Wi-Fi, Ethernet, 4G/LTE' },
                { label: 'Sensor Inputs', value: 'Up to 8 sensors' },
                { label: 'Operating Temperature', value: '-40°C to +70°C' },
                { label: 'Power Supply', value: '12-30V DC' },
                { label: 'Power Consumption', value: '< 15W' },
                { label: 'Data Storage', value: '32GB internal' },
                { label: 'Cloud Connectivity', value: 'MQTT, REST API' },
                { label: 'Protection Class', value: 'IP67' },
                { label: 'Mounting', value: 'DIN rail or wall mount' },
                { label: 'Dimensions', value: '150 x 100 x 50 mm' },
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
                                src="/products/oil conditioning/Tandelta/SENSE3 Gateway Kit/SENSE3 Gateway Kit.jpg"
                                alt="SENSE3 Gateway Kit"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    SENSE3 Gateway Kit
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Advanced IoT gateway for connecting multiple oil quality sensors to cloud 
                                    platforms with comprehensive connectivity options.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Multi-sensor connectivity</li>
                                    <li>• Cloud integration</li>
                                    <li>• Multiple communication protocols</li>
                                    <li>• Local data storage</li>
                                    <li>• Remote configuration</li>
                                    <li>• Real-time monitoring</li>
                                    <li>• Industrial-grade design</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Connectivity Options</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Wi-Fi wireless connection</li>
                                    <li>• Ethernet wired connection</li>
                                    <li>• 4G/LTE cellular backup</li>
                                    <li>• MQTT cloud protocols</li>
                                    <li>• REST API integration</li>
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
