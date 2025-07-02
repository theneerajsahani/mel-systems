"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Share2, Zap, Shield, Award, ChevronRight, Star, ChevronDown, ChevronUp, CheckCircle, Settings, Globe, Clock, BarChart3, AlertCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import TechnicalSpecsTable from "@/components/TechnicalSpecsTable"
import OrderCodesTable from "@/components/OrderCodesTable"
import ProductLayout from "@/components/ProductLayout"
import ProductGrid from "@/components/ProductGrid"
import { findCurrentNavigationBySlugs, buildHrefFromSlugs } from "@/lib/navigation"

import type { ProductData as SystemsProductData } from '@/lib/systems-products'

interface DynamicProductPageProps {
  productData: SystemsProductData;
}

function buildBreadcrumbsFromSlugPath(slugPath: string[]) {
  // Always start with Products
  const breadcrumbs: { label: string; href?: string }[] = [
    { label: "Products", href: "/products" }
  ];
  let currentSlugs: string[] = [];
  let nodes = require("@/lib/navigation").productNavigation;
  for (let i = 0; i < slugPath.length; i++) {
    const slug = slugPath[i];
    const node = (nodes || []).find((n: any) => n.slug === slug);
    if (!node) break;
    currentSlugs.push(slug);
    if (i === slugPath.length - 1) {
      breadcrumbs.push({ label: node.label });
    } else {
      breadcrumbs.push({ label: node.label, href: buildHrefFromSlugs(currentSlugs) });
    }
    nodes = node.children;
  }
  return breadcrumbs;
}

export default function DynamicProductPage({ productData }: DynamicProductPageProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [isImageZoomed, setIsImageZoomed] = useState(false)
    const [showAllFeatures, setShowAllFeatures] = useState(false)

    // Fallback to empty array if slugPath is missing
    const breadcrumbItems = buildBreadcrumbsFromSlugPath(productData.slugPath || []);

    return (
        <ProductLayout breadcrumbItems={breadcrumbItems}>
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

            {/* 2. MEDIA SECTION */}
            <Card className="mb-8 shadow-lg border-0 overflow-hidden">
                <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 lg:p-8">
                        {/* Main Image with zoom functionality */}
                        {productData.images && productData.images.length > 0 && (
                            <div className="relative group mb-6 max-w-md mx-auto">
                                <div 
                                    className={`aspect-[4/3] bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-md transition-all duration-300 cursor-zoom-in card-hover ${
                                        isImageZoomed ? 'scale-105' : 'hover:border-blue-300 hover:shadow-lg'
                                    }`}
                                    onClick={() => setIsImageZoomed(!isImageZoomed)}
                                >
                                    <Image
                                        src={productData.images[selectedImageIndex].src}
                                        alt={productData.images[selectedImageIndex].alt}
                                        width={400}
                                        height={300}
                                        className={`w-full h-full object-contain p-4 transition-transform duration-300 ${isImageZoomed ? 'zoom-image' : ''}`}
                                        priority
                                    />
                                </div>
                                {/* Image indicators */}
                                <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                                    {selectedImageIndex + 1} of {productData.images.length}
                                </div>
                            </div>
                        )}
                        
                        {/* Enhanced Thumbnails */}
                        {productData.images && productData.images.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-4 pt-2 px-6 scrollbar-hide">
                                {productData.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 relative p-1"
                                    >
                                        <button
                                            onClick={() => setSelectedImageIndex(index)}
                                            className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-200"
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-contain p-1 bg-white rounded-lg"
                                            />
                                        </button>
                                        {selectedImageIndex === index && (
                                            <div className="absolute top-0 right-0 w-3 h-3 bg-black rounded-full border-2 border-white shadow-sm"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="space-y-4 max-w-md mx-auto">
                                <Button 
                                    size="lg" 
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-base font-semibold btn-scale focus-ring"
                                >
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Request Quote
                                </Button>
                                
                                <Button variant="outline" className="w-full hover:bg-gray-50 btn-scale focus-ring">
                                    <Share2 className="w-4 h-4 mr-1" />
                                    Share
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* 3. DESCRIPTION SECTION */}
            {productData.description && productData.description.length > 0 && (
                <Card className="mb-8 shadow-lg border-0">
                    <CardContent className="p-6 lg:p-8">
                        <div className="flex items-center mb-6">
                            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
                            <h2 className="text-2xl font-bold text-gray-900">Product Description</h2>
                        </div>
                        <div className="prose prose-lg prose-gray max-w-none">
                            {productData.description.map((paragraph, index) => (
                                <p key={index} className="text-gray-700 leading-relaxed mb-4 text-base lg:text-lg">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* 4. ADDITIONAL SECTIONS */}
            {productData.additionalSections && productData.additionalSections.length > 0 && (
                <div className="space-y-6 lg:space-y-8 mb-8">
                    {productData.additionalSections.map((section, index) => (
                        <Card key={index} className="shadow-lg border-0 overflow-hidden">
                            <CardContent className="p-0">
                                <div className="p-6 lg:p-8">
                                    {section.title && (
                                        <div className="flex items-center mb-6">
                                            <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mr-4"></div>
                                            <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                                        </div>
                                    )}
                                    {section.content && (
                                        <div className="prose prose-lg prose-gray max-w-none mb-6">
                                            {section.content.split('\n').map((paragraph, pIndex) => (
                                                <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 text-base lg:text-lg">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                    {section.videoEmbedUrl && (
                                        <div className="w-full aspect-w-16 aspect-h-9 my-6">
                                            <iframe
                                                src={section.videoEmbedUrl}
                                                title="Embedded video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-96 rounded-lg shadow-lg"
                                            ></iframe>
                                        </div>
                                    )}
                                </div>
                                {section.image && (
                                    <div className="border-t border-gray-100">
                                        <div className="p-6 lg:p-8 bg-gray-50">
                                            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                                                <Image
                                                    src={section.image.src}
                                                    alt={section.image.alt}
                                                    width={800}
                                                    height={450}
                                                    className="w-full h-auto object-contain bg-white"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            {/* 6. TABLES SECTION - Technical Specifications or Order Codes */}
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
        </ProductLayout>
    )
}
