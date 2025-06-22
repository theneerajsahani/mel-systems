'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function GatewayHubPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'TanDelta', href: '/products/oil-conditioning/tandelta' },
        { label: 'Gateway Hub' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Gateway Connections', value: 'Up to 16 gateways' },
                { label: 'Total Sensors', value: 'Up to 64 sensors' },
                { label: 'Communication', value: 'Ethernet, Wi-Fi, 4G' },
                { label: 'Operating Temperature', value: '-20°C to +70°C' },
                { label: 'Power Supply', value: '24V DC' },
                { label: 'Power Consumption', value: '< 25W' },
                { label: 'Data Storage', value: '1TB local storage' },
                { label: 'Cloud Connectivity', value: 'Yes, secure' },
                { label: 'Protection Class', value: 'IP54' },
                { label: 'Dimensions', value: '200 x 150 x 75 mm' },
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
                                src="/products/oil conditioning/Tandelta/Gateway Hub/Gateway Hub.jpg"
                                alt="Gateway Hub"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    Gateway Hub
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Central hub for managing multiple gateways and sensors in large-scale oil 
                                    monitoring installations with enterprise-level features.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Multi-gateway management</li>
                                    <li>• Centralized data collection</li>
                                    <li>• Large-scale deployments</li>
                                    <li>• Enterprise connectivity</li>
                                    <li>• Local data storage</li>
                                    <li>• Redundant communications</li>
                                    <li>• Advanced analytics</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Applications</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Large industrial facilities</li>
                                    <li>• Multi-site operations</li>
                                    <li>• Enterprise monitoring</li>
                                    <li>• Central control rooms</li>
                                    <li>• Fleet management systems</li>
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
