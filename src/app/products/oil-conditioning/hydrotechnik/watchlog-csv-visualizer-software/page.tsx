'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function WatchlogCSVVisualizerPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'Hydrotechnik', href: '/products/oil-conditioning/hydrotechnik' },
        { label: 'Watchlog CSV Visualizer Software' },
    ];

    const specifications = [
        {
            title: "Software Specifications",
            specs: [
                { label: 'Operating System', value: 'Windows 10/11, macOS, Linux' },
                { label: 'Data Import', value: 'CSV, Excel, XML formats' },
                { label: 'Chart Types', value: 'Line, Bar, Scatter, Histogram' },
                { label: 'Export Formats', value: 'PDF, PNG, SVG, Excel' },
                { label: 'Data Points', value: 'Unlimited' },
                { label: 'Real-time Display', value: 'Yes' },
                { label: 'Alarm Functions', value: 'Configurable thresholds' },
                { label: 'Database Support', value: 'SQL Server, MySQL, SQLite' },
                { label: 'Reporting', value: 'Automated & Custom' },
                { label: 'Languages', value: 'Multi-language support' },
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
                                src="/products/oil conditioning/Hydrotechnik/Watchlog CSV Visualizer Software/CSV Visualizer.jpg"
                                alt="Watchlog CSV Visualizer Software"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    Watchlog CSV Visualizer Software
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Powerful data visualization software for analyzing and presenting 
                                    sensor data with advanced charting and reporting capabilities.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Import data from multiple formats</li>
                                    <li>• Real-time data visualization</li>
                                    <li>• Advanced charting options</li>
                                    <li>• Configurable alarms</li>
                                    <li>• Automated reporting</li>
                                    <li>• Multi-platform support</li>
                                    <li>• Database integration</li>
                                    <li>• Export capabilities</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Applications</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Data analysis and trending</li>
                                    <li>• Performance monitoring</li>
                                    <li>• Quality control reporting</li>
                                    <li>• Compliance documentation</li>
                                    <li>• Historical data review</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Software Specifications</h2>
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
