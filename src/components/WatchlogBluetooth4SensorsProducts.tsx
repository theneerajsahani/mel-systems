'use client';
import Image from 'next/image';

const products = [
    {
        name: 'WLB-PT Compact Bluetooth Pressure Sensor',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Bluetooth Pressure Sensor.jpg',
    },
    {
        name: 'WLB-TT Compact Bluetooth Temperature Sensor', 
        image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Bluetooth Temperature Sensor.jpg',
    },
    {
        name: 'WLB-DDPG Series Watchlog Bluetooth Digital Datalogging Pressure Gauge',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Digital Datalogging Pressure Gauge.jpg',
    },
    {
        name: 'WLB-DPG Series Watchlog Bluetooth Digital Pressure Gauge',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Digital Pressure Gauge.jpg',
    },
    {
        name: 'DGP Series Digital Bluetooth Pressure Gauge & Minimess Test Kit',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/DGP Test Kit.jpg',
    }
];

export default function WatchlogBluetooth4SensorsProducts() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                    Watchlog Bluetooth Pressure & Temperature Sensors, Gauges and App for up to 4 sensors connected simultaneously
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    The Watchlog Bluetooth sensor range is an extremely fast and easy way to add live pressure, temperature sensors, digital gauges, or portable gauges are designed for use with our free monitoring and datalogging app, which is available in the iOS App Store and Android Google Play store.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Ranges:</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3 h-40 flex items-center justify-center">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={120}
                                    height={120}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <p className="text-sm text-gray-900 font-medium leading-tight">
                                {product.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
