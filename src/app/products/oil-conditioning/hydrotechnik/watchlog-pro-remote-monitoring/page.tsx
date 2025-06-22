'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function WatchlogProRemoteMonitoringPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'Hydrotechnik', href: '/products/oil-conditioning/hydrotechnik' },
        { label: 'Watchlog Pro Remote Monitoring' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Communication', value: '4G/LTE, Wi-Fi, Ethernet' },
                { label: 'Sensor Inputs', value: 'Up to 32 channels' },
                { label: 'Data Logging', value: '1M+ data points' },
                { label: 'Cloud Storage', value: 'Secure AWS/Azure' },
                { label: 'Sampling Rate', value: '1 Hz to 10 kHz' },
                { label: 'Operating Temperature', value: '-40°C to +85°C' },
                { label: 'Power Supply', value: '12-30V DC, solar option' },
                { label: 'Protection Class', value: 'IP67' },
                { label: 'Remote Access', value: 'Web portal & mobile app' },
                { label: 'Alarm Notifications', value: 'Email, SMS, push' },
                { label: 'Data Export', value: 'CSV, Excel, PDF reports' },
                { label: 'Dimensions', value: '200 x 150 x 80 mm' },
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
                                src="/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/Watchlog Pro Remote Monitoring.png"
                                alt="Watchlog Pro Remote Monitoring"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    Watchlog Pro Remote Monitoring
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Enterprise-grade remote monitoring solution for continuous surveillance 
                                    of critical systems with cloud connectivity and advanced analytics.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• 24/7 remote monitoring</li>
                                    <li>• Cloud-based data storage</li>
                                    <li>• Multi-channel data logging</li>
                                    <li>• Real-time alerts</li>
                                    <li>• Mobile app access</li>
                                    <li>• Advanced analytics</li>
                                    <li>• Automated reporting</li>
                                    <li>• Scalable architecture</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Applications</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Remote asset monitoring</li>
                                    <li>• Predictive maintenance</li>
                                    <li>• Fleet management</li>
                                    <li>• Condition-based monitoring</li>
                                    <li>• Environmental monitoring</li>
                                    <li>• Process optimization</li>
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
