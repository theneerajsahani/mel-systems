'use client';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';

export default function WatchlogBluetoothPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'Hydrotechnik', href: '/products/oil-conditioning/hydrotechnik' },
        { label: 'Watchlog Bluetooth Sensors, Gauges and Mobile Apps' },
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="py-6">
                    <ProductBreadcrumb items={breadcrumbItems} />
                </div>

                <div className="py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-foreground mb-4">
                            Watchlog Bluetooth Sensors, Gauges and Mobile Apps
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Wireless Bluetooth-enabled sensors and gauges with mobile app connectivity 
                            for real-time monitoring and data collection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <Link href="/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/pressure-sensors">
                            <ProductCard
                                image='/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Bluetooth Pressure Sensor.jpg'
                                name='Bluetooth Pressure Sensors'
                            />
                        </Link>
                        <Link href="/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/digital-gauges">
                            <ProductCard
                                image='/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Digital Gauge.jpg'
                                name='Digital Gauges'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
