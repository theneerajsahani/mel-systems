'use client';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bluetooth, Smartphone, Gauge, Waves } from "lucide-react";
import Image from 'next/image';

const productCategories = [
    {
        title: 'Watchlog Bluetooth Pressure & Temperature Sensors, Gauges and App for up to 4 sensors connected simultaneously',
        description: 'Entry-level Bluetooth sensors and gauges with mobile app for basic monitoring and data collection',
        categoryType: 'Standard Bluetooth',
        icon: <Bluetooth className="w-5 h-5" />,
        products: [
            {
                name: 'WLB-PT Compact Bluetooth Pressure Sensor',
                description: 'Compact wireless pressure sensor with Bluetooth connectivity for mobile monitoring',
                image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Bluetooth Pressure Sensor.jpg',
                href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/wlb-pt-compact-bluetooth-pressure-sensor',
                features: ['Bluetooth 5.0', 'Compact Design', 'Battery Powered']
            },
            {
                name: 'WLB-TT Compact Bluetooth Temperature Sensor',
                description: 'Wireless temperature sensor with Bluetooth connectivity for remote monitoring',
                image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Bluetooth Temperature Sensor.jpg',
                href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/wlb-tt-compact-bluetooth-temperature-sensor',
                features: ['Wireless Monitoring', 'Wide Range', 'Mobile App']
            },
            {
                name: 'WLB-DDPG Series Bluetooth Digital Datalogging Pressure Gauges',
                description: 'Digital pressure gauges with Bluetooth connectivity and built-in data logging',
                image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Digital Datalogging Pressure Gauge.jpg',
                href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/wlb-ddpg-series',
                features: ['Data Logging', 'Digital Display', 'Bluetooth']
            },
            {
                name: 'WLB-DPG Series Watchlog Bluetooth Digital Pressure Gauge',
                description: 'Digital pressure gauge with Bluetooth connectivity for real-time monitoring',
                image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Digital Pressure Gauge.jpg',
                href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/wlb-dpg-series',
                features: ['Real-time Display', 'Bluetooth', 'Digital Gauge']
            },
            {
                name: 'Watchlog Bluetooth Live View & Datalogging App for iOS and Android',
                description: 'Mobile app for monitoring and data collection from Bluetooth sensors and gauges',
                image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/Mobile App Interface.jpg',
                href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/watchlog-bluetooth-app',
                features: ['iOS & Android', 'Live View', 'Data Logging']
            },
            {
                name: 'DDPG Series Digital Datalogging Bluetooth Pressure Gauge & Minimess® Test Kit',
                description: 'Complete test kit with digital datalogging pressure gauge and Minimess connections',
                image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/DDPG Test Kit.jpg',
                href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/ddpg-series-test-kit',
                features: ['Complete Kit', 'Minimess®', 'Data Logging']
            },
            {
                name: 'DGP Series Digital Bluetooth Pressure Gauge & Minimess Test Kit',
                description: 'Digital pressure gauge test kit with Bluetooth connectivity and Minimess adapters',
                image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/1st category/DGP Test Kit.jpg',
                href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/dgp-series-test-kit',
                features: ['Test Kit', 'Bluetooth', 'Minimess®']
            }
        ]
    },
    {
        title: 'Watchlog Bluetooth-Plus Pressure, Level & Force Sensors and App for up to 12 connected sensors & advanced app calculation features',
        description: 'Advanced Bluetooth sensors with enhanced connectivity and professional calculation features',
        categoryType: 'Bluetooth-Plus',
        icon: <Waves className="w-5 h-5" />,
        products: [
            {
                name: 'HT-WLBP Watchlog Bluetooth-Plus Pressure Sensor',
                description: 'Advanced Bluetooth pressure sensor with extended range and professional features',
                image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Bluetooth-Plus Pressure Sensor.jpg',
                href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/ht-wlbp-bluetooth-plus-pressure-sensor',
                features: ['12 Sensor Support', 'Extended Range', 'Professional']
            },
            {
                name: 'HT-WLBL Watchlog Bluetooth-Plus Hydrostatic Level Sensors',
                description: 'Hydrostatic level sensors with Bluetooth-Plus connectivity for tank monitoring',
                image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Bluetooth-Plus Level Sensor.jpg',
                href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/ht-wlbl-bluetooth-plus-level-sensors',
                features: ['Level Measurement', 'Hydrostatic', 'Tank Monitoring']
            },
            {
                name: 'HT-WLBLC Watchlog Bluetooth-Plus Compression Load Cells',
                description: 'Compression load cells with Bluetooth-Plus for force measurement applications',
                image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Bluetooth-Plus Load Cell.jpg',
                href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/ht-wlblc-bluetooth-plus-compression-load-cells',
                features: ['Force Measurement', 'Compression', 'Load Cells']
            },
            {
                name: 'HT-WLBLL Watchlog Bluetooth-Plus Compression Load Link',
                description: 'Compression load link with Bluetooth-Plus connectivity for tension applications',
                image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Bluetooth-Plus Load Link.jpg',
                href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/ht-wlbll-bluetooth-plus-compression-load-link',
                features: ['Tension Measurement', 'Load Link', 'Compression']
            },
            {
                name: 'Watchlog Bluetooth-Plus iOS and Android App',
                description: 'Advanced mobile app with calculation features for up to 12 connected sensors',
                image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/2nd category/Bluetooth-Plus App Interface.jpg',
                href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps/watchlog-bluetooth-plus-app',
                features: ['12 Sensors', 'Calculations', 'Advanced Features']
            }
        ]
    }
];

export default function WatchlogBluetoothProducts() {
    return (
        <div className="space-y-12">
            {productCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                    {/* Category Header */}
                    <div className="text-center border-b border-gray-200 pb-6">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className={`p-3 rounded-full ${categoryIndex === 0 ? 'bg-blue-100' : 'bg-purple-100'}`}>
                                <div className={categoryIndex === 0 ? 'text-blue-600' : 'text-purple-600'}>
                                    {category.icon}
                                </div>
                            </div>
                            <Badge className={`${
                                categoryIndex === 0 
                                    ? 'bg-blue-500 hover:bg-blue-600' 
                                    : 'bg-purple-500 hover:bg-purple-600'
                            } text-white border-0`}>
                                {category.categoryType}
                            </Badge>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                            {category.title}
                        </h2>
                        <p className="text-gray-600 max-w-4xl mx-auto text-lg">
                            {category.description}
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.products.map((product, productIndex) => (
                            <Card key={product.name} className="group relative overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-0">
                                    <div className="relative">
                                        {/* Product Image Section */}
                                        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 h-48 flex items-center justify-center">
                                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    width={200}
                                                    height={150}
                                                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            
                                            {/* Category Indicator */}
                                            <div className="absolute top-3 left-3">
                                                <Badge className={`${
                                                    categoryIndex === 0 
                                                        ? 'bg-blue-500 hover:bg-blue-600' 
                                                        : 'bg-purple-500 hover:bg-purple-600'
                                                } text-white border-0 text-xs`}>
                                                    {categoryIndex === 0 ? (
                                                        <><Bluetooth className="w-3 h-3 mr-1" /> Standard</>
                                                    ) : (
                                                        <><Waves className="w-3 h-3 mr-1" /> Plus</>
                                                    )}
                                                </Badge>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                                {product.name}
                                            </h3>
                                            
                                            <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                                                {product.description}
                                            </p>

                                            {/* Features Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {product.features.map((feature, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-200 transition-colors duration-200"
                                                    >
                                                        <Smartphone className="w-3 h-3" />
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Action Button */}
                                            <Link href={product.href}>
                                                <Button className={`w-full ${
                                                    categoryIndex === 0 
                                                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' 
                                                        : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
                                                } text-white shadow-md hover:shadow-lg transition-all duration-300 group/btn`}>
                                                    <span className="flex items-center justify-center gap-2">
                                                        Learn More
                                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                                    </span>
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
