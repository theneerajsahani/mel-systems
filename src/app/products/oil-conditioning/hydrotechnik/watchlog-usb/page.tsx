'use client';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export default function WatchlogUSBPage() {
    const manufacturers = [
        { name: 'TanDelta', href: '/products/oil-conditioning/tandelta', isActive: false },
        { name: 'Hydrotechnik', href: '/products/oil-conditioning/hydrotechnik', isActive: true },
        { name: 'Filtertechnik', href: '/products/oil-conditioning/filtertechnik', isActive: false },
        { name: 'Evamo', href: '/products/oil-conditioning/evamo', isActive: false },
    ];

    const hydrotechnikProducts = [
        { name: 'Watchlog USB', href: '/products/oil-conditioning/hydrotechnik/watchlog-usb', isActive: true },
        { name: 'Watchlog Bluetooth Sensors, Gauges and Mobile Apps', href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps', isActive: false },
        { name: 'Watchlog Wireless Pressure, Temperature and Flow Sensors', href: '/products/oil-conditioning/hydrotechnik/watchlog-wireless-pressure-temperature-and-flow-sensors', isActive: false },
        { name: 'Watchlog Pro Remote Monitoring', href: '/products/oil-conditioning/hydrotechnik/watchlog-pro-remote-monitoring', isActive: false },
        { name: 'Watchlog CSV Visualizer Software', href: '/products/oil-conditioning/hydrotechnik/watchlog-csv-visualizer-software', isActive: false },
    ];

    const products = [
        {
            name: 'Watchlog USB Dual Pressure and Temperature Sensor',
            image: '/products/oil conditioning/Hydrotechnik/Watchlog-USB/Watchlog USB Dual Pressure and Temperature Sensor/Watchlog USB Dual Pressure and Temperature Sensor.jpg',
            href: '/products/oil-conditioning/hydrotechnik/watchlog-usb/watchlog-usb-dual-pressure-and-temperature-sensor'
        },
        {
            name: 'Watchlog USB Windows® PC/tablet pressure & temperature measurement software',
            image: '/products/oil conditioning/Hydrotechnik/Watchlog-USB/Watchlog USB Windows PC tablet pressure temperature measurement software/Watchlog USB Windows PC tablet pressure temperature measurement software.jpg',
            href: '/products/oil-conditioning/hydrotechnik/watchlog-usb/watchlog-usb-windows-pc-tablet-software'
        }
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
                        USB-based pressure and temperature measurement solutions
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
                        {/* Manufacturers */}
                        <nav className="space-y-1 mb-8">
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

                        {/* Hydrotechnik Products */}
                        <div className="space-y-1">
                            <h3 className="px-4 py-2 text-sm font-semibold text-foreground">Hydrotechnik Products</h3>
                            {hydrotechnikProducts.map((product) => (
                                <Link
                                    key={product.name}
                                    href={product.href}
                                    className={`block px-4 py-2 text-sm transition-colors pl-8 ${
                                        product.isActive
                                            ? 'text-primary font-medium bg-primary/5'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                >
                                    • {product.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Watchlog USB</h2>
                        
                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {products.map((product) => (
                                <Link key={product.name} href={product.href}>
                                    <ProductCard
                                        image={product.image}
                                        name={product.name}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
