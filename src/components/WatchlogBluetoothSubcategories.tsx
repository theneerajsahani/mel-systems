'use client';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bluetooth, Wifi, Zap } from "lucide-react";
import Image from 'next/image';

const subcategories = [
    {
        name: 'Watchlog Bluetooth Pressure Sensors',
        description: 'Wireless pressure sensors with Bluetooth connectivity for remote monitoring',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog-Bluetooth/placeholder.png',
        href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth/pressure-sensors',
        category: 'Sensors',
        features: ['Wireless', 'Bluetooth 5.0', 'Long Range']
    },
    {
        name: 'Watchlog Bluetooth Temperature Sensors',
        description: 'Wireless temperature monitoring with advanced Bluetooth capabilities',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog-Bluetooth/placeholder.png',
        href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth/temperature-sensors',
        category: 'Sensors',
        features: ['Wireless', 'High Accuracy', 'Real-time']
    }
];

export default function WatchlogBluetoothSubcategories() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {subcategories.map((product, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
                    <CardContent className="p-0">
                        <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4">
                                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                                    {product.category}
                                </Badge>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {product.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {product.features.map((feature, featureIndex) => (
                                    <Badge key={featureIndex} variant="outline" className="text-xs">
                                        {feature}
                                    </Badge>
                                ))}
                            </div>
                            <Link href={product.href}>
                                <Button 
                                    variant="outline" 
                                    className="w-full group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-700 transition-all duration-200"
                                >
                                    View Details
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}