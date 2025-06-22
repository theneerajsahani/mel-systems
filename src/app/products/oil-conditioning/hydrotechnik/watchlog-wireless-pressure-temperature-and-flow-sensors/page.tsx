'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function WatchlogWirelessSensorsPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'Hydrotechnik', href: '/products/oil-conditioning/hydrotechnik' },
        { label: 'Watchlog Wireless Pressure, Temperature and Flow Sensors' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Pressure Range', value: '0-1000 bar (customizable)' },
                { label: 'Temperature Range', value: '-40°C to +150°C' },
                { label: 'Flow Range', value: '0.1-1000 L/min' },
                { label: 'Accuracy', value: '±0.1% FS' },
                { label: 'Wireless Protocol', value: 'LoRaWAN, 868 MHz' },
                { label: 'Range', value: 'Up to 15 km line of sight' },
                { label: 'Battery Life', value: '5+ years (replaceable)' },
                { label: 'Sampling Rate', value: '1 sample/min to 1 sample/day' },
                { label: 'Data Storage', value: '10,000+ readings' },
                { label: 'Protection Class', value: 'IP68' },
                { label: 'Thread Connection', value: 'M20x1.5, G1/2", NPT1/2"' },
                { label: 'Dimensions', value: '150 x 50 x 40 mm' },
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
                                src="/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Pressure, Temperature and Flow Sensors.png"
                                alt="Watchlog Wireless Sensors"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    Watchlog Wireless Pressure, Temperature and Flow Sensors
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Long-range wireless sensors for pressure, temperature, and flow monitoring 
                                    with exceptional battery life and industrial durability.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• LoRaWAN wireless technology</li>
                                    <li>• 15km transmission range</li>
                                    <li>• 5+ year battery life</li>
                                    <li>• IP68 waterproof rating</li>
                                    <li>• High accuracy measurements</li>
                                    <li>• Multiple parameter sensing</li>
                                    <li>• Easy installation</li>
                                    <li>• Low power consumption</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Sensor Types</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Pressure sensors (0-1000 bar)</li>
                                    <li>• Temperature sensors (-40°C to +150°C)</li>
                                    <li>• Flow sensors (0.1-1000 L/min)</li>
                                    <li>• Combined pressure/temperature</li>
                                    <li>• Multi-parameter sensors</li>
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
