"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Share2, Zap, Shield, Award, ChevronRight, Star, ChevronDown, ChevronUp, CheckCircle, Settings, Globe, Clock, BarChart3, AlertCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import TechnicalSpecsTable from "@/components/TechnicalSpecsTable"
import OrderCodesTable from "@/components/OrderCodesTable"
import ProductLayoutNoSidebar from "@/components/ProductLayoutNoSidebar"
import ProductGrid from "@/components/ProductGrid"
import { ProductData } from "@/lib/oil-conditioning-products"

interface DynamicProductPageNoSidebarProps {
  productData: ProductData;
}

export default function DynamicProductPageNoSidebar({ productData }: DynamicProductPageNoSidebarProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [isImageZoomed, setIsImageZoomed] = useState(false)
    const [showAllFeatures, setShowAllFeatures] = useState(false)

    return (
        <ProductLayoutNoSidebar breadcrumbItems={productData.breadcrumbItems}>
            {/* 1. TITLE SECTION */}
            <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200">
                        {productData.brand}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <span className="capitalize">{productData.category.replace('-', ' ')}</span>
                    </div>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                    {productData.name}
                </h1>
            </div>

            {/* 2. DESCRIPTION SECTION */}
            <Card className="mb-8 shadow-lg border-0 overflow-hidden">
                <CardContent className="p-6 lg:p-8">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                        {productData.description.map((paragraph, index) => (
                            <p key={index} className="text-gray-600 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* 3. SPECIFICATIONS SECTION */}
            <Card className="mb-8 shadow-lg border-0 overflow-hidden">
                <CardContent className="p-6 lg:p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Specifications</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Standard Bluetooth Features</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Up to 4 sensors connected simultaneously
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    iOS and Android mobile apps for viewing and logging data
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Wide range of pressure, temperature, level, and flow sensors
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Various connectivity options and digital displays available
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Use Bluetooth plus pressure sensor for many devices, from 10 metres range (line of sight) to 10 metres (via 3m acoustic)
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    HT-WLBL Bluetooth-Plus hydrostatic level sensors - short sensor versions with short ranges from 0...25 bar up to 0...700 bar
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Software - Automatic, Analytical, local, smartphone, scale & label, mobile hydraulics, machine tools, and light industry
                                </li>
                            </ul>
                        </div>
                        
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Bluetooth-Plus Advanced Features</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Up to 12 sensors connected simultaneously  
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Advanced app calculation features
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Project templates and sharing capabilities
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Custom calculation channels
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Enhanced dashboards and data visualization
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                    Professional calculation features for complex analysis
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* 4. ADDITIONAL SECTIONS (Product Categories) */}
            {productData.additionalSections && productData.additionalSections.length > 0 && (
                <div className="space-y-8">
                    {productData.additionalSections.map((section, index) => (
                        <Card key={index} className="shadow-lg border-0 overflow-hidden">
                            <CardContent className="p-0">
                                <div>
                                    {section.content && section.content.startsWith('PRODUCT_GRID:') ? (
                                        <div className="p-6 lg:p-8">
                                            {section.content === 'PRODUCT_GRID:watchlog-usb-products' && 
                                             productData.categoryProducts && 
                                             <ProductGrid products={productData.categoryProducts} />}
                                            {section.content === 'PRODUCT_GRID:watchlog-bluetooth-categories' && 
                                             productData.categoryProducts && 
                                             <ProductGrid products={productData.categoryProducts} />}
                                        </div>
                                    ) : (
                                        <div className="p-6 lg:p-8">
                                            <div className="flex items-center mb-6">
                                                <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-4"></div>
                                                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                                            </div>
                                            {section.content && (
                                                <div className="prose prose-gray max-w-none">
                                                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                                                </div>
                                            )}
                                            {section.image && (
                                                <div className="mt-6 text-center">
                                                    <Image
                                                        src={section.image.src}
                                                        alt={section.image.alt}
                                                        width={600}
                                                        height={400}
                                                        className="mx-auto rounded-lg shadow-md"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            {/* 5. TABLES SECTION - Technical Specifications or Order Codes */}
            {(productData.technicalSpecs || productData.orderCodes) && (
                <Card className="shadow-lg border-0 overflow-hidden">
                    <CardContent className="p-0">
                        <div className="p-6 lg:p-8 border-b border-gray-100">
                            <div className="flex items-center">
                                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4"></div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {productData.technicalSpecs ? "Technical Specifications" : "Order Information"}
                                </h2>
                            </div>
                        </div>
                        {productData.technicalSpecs && (
                            <TechnicalSpecsTable sections={productData.technicalSpecs} title="" />
                        )}
                        {productData.orderCodes && (
                            <div className="p-6 lg:p-8">
                                <OrderCodesTable orderCodes={productData.orderCodes} />
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            {/* Mobile Sticky Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 sm:hidden">
                <div className="flex gap-3">
                    <Button 
                        size="lg" 
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg btn-scale"
                    >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Request Quote
                    </Button>
                    <Button variant="outline" size="lg" className="btn-scale focus-ring">
                        <Share2 className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Add bottom padding for mobile sticky bar */}
            <div className="h-20 sm:hidden"></div>
        </ProductLayoutNoSidebar>
    )
}
