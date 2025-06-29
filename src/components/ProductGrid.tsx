'use client';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Monitor, Zap } from "lucide-react";
import Image from 'next/image';

interface ProductGridItem {
    name: string;
    description: string;
    image: string;
    href: string;
    category: string;
    features: string[];
}

interface ProductGridProps {
    products: ProductGridItem[];
    title?: string;
}

export default function ProductGrid({ products, title }: ProductGridProps) {
    return (
        <div className="space-y-6">
            {title && (
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {products.map((product, index) => (
                    <Card key={product.name} className="group relative overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-0">
                            <div className="relative">
                                {/* Product Image Section */}
                                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 h-48 flex items-center justify-center">
                                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={250}
                                            height={150}
                                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3">
                                        <Badge className={`${
                                            product.category === 'Hardware' 
                                                ? 'bg-blue-500 hover:bg-blue-600' 
                                                : 'bg-purple-500 hover:bg-purple-600'
                                        } text-white border-0 text-xs`}>
                                            {product.category === 'Hardware' ? (
                                                <><Settings className="w-3 h-3 mr-1" /> Hardware</>
                                            ) : (
                                                <><Monitor className="w-3 h-3 mr-1" /> Software</>
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
                                                <Zap className="w-3 h-3" />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Button */}
                                    <Link href={product.href}>
                                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-300 group/btn">
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
    );
}