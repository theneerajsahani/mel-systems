'use client';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export default function HydrotechnikPage() {
    const manufacturers = [
        { name: 'TanDelta', href: '/products/oil-conditioning/tandelta', isActive: false },
        { name: 'Hydrotechnik', href: '/products/oil-conditioning/hydrotechnik', isActive: true },
        { name: 'Filtertechnik', href: '/products/oil-conditioning/filtertechnik', isActive: false },
        { name: 'Evamo', href: '/products/oil-conditioning/evamo', isActive: false },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Header Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="py-8 md:py-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                        OIL CONDITIONING
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground">
                        Description
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border"></div>

            {/* Main Content */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 py-8">
                    {/* Sidebar */}
                    <div className="lg:w-64 flex-shrink-0">
                        <nav className="space-y-1">
                            {manufacturers.map((manufacturer) => (
                                <Link
                                    key={manufacturer.name}
                                    href={manufacturer.href}
                                    className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                        manufacturer.isActive
                                            ? 'bg-primary/10 text-primary border-l-4 border-primary'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                >
                                    {manufacturer.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Hydrotechnik</h2>
                        
                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            <Link href="/products/oil-conditioning/hydrotechnik/watchlog-usb">
                                <ProductCard
                                    image='/products/oil conditioning/Hydrotechnik/Watchlog-USB/Wactchlog USB.png'
                                    name='Watchlog USB'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps">
                                <ProductCard
                                    image='/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/Watchlog Bluetooth Sensors, Gauges and Mobile Apps.png'
                                    name='Watchlog Bluetooth Sensors & Mobile Apps'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/hydrotechnik/watchlog-pro-remote-monitoring">
                                <ProductCard
                                    image='/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/Watchlog Pro Remote Monitoring.png'
                                    name='Watchlog Pro Remote Monitoring'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/hydrotechnik/watchlog-wireless-pressure-temperature-and-flow-sensors">
                                <ProductCard
                                    image='/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Pressure, Temperature and Flow Sensors.png'
                                    name='Watchlog Wireless Sensors'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/hydrotechnik/watchlog-csv-visualizer-software">
                                <ProductCard
                                    image='/products/oil conditioning/Hydrotechnik/Watchlog CSV Visualizer Software/Watchlog CSV Visualizer Software.png'
                                    name='Watchlog CSV Visualizer Software'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
