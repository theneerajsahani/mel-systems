"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useState } from "react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import TechnicalSpecsTable from "@/components/TechnicalSpecsTable"
import ProductBreadcrumb from "@/components/ProductBreadcrumb"
import { oqsxG2OilQualitySensorSpecs } from "@/lib/products"

const images = [
    {
        src: "/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg",
        alt: "OQSX-G2 Sensor Kit"
    },
    {
        src: "/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-2.jpg",
        alt: "OQSX-G2 Sensor Kit Detail"
    }
]

const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "Tandelta", href: "/products/oil-conditioning/tandelta" },
    { label: "OQSx-G2 Oil Quality Sensor" } // No href for current page
]

export default function OQSXG2OilQualitySensorPage() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    return (
        <div className="flex flex-col px-4 md:px-8 lg:px-16 xl:px-16 py-4">
            {/* Breadcrumb */}
            <ProductBreadcrumb items={breadcrumbItems} />

            {/* Back Button */}
            <div className="flex items-center py-2 text-[14px] sm:hidden">
                <ChevronLeftIcon className="w-4 h-4" />Back
            </div>

            {/* Divider */}
            <div className="border"></div>

            {/* Main content */}
            <div className='flex flex-col lg:flex-row gap-10 py-10'>
                {/* Sidebar */}
                <div className='hidden lg:block w-1/4'>
                    <p>Tandelta</p>
                    <p>Hydrotechnik</p>
                    <p>Filtertechnik</p>
                    <p>Evamo</p>
                </div>

                {/* Content */}
                <div className='flex flex-col gap-4 flex-1'>
                    <h3 className='text-[18px] font-bold uppercase md:text-[24px]'>OQSx-G2 Oil Quality Sensor</h3>

                    {/* Image Gallery */}
                    <div className="w-full bg-white border border-gray-200 rounded-lg p-4 md:p-6 lg:p-8">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                            {/* Main Image */}
                            <div className="flex-1 flex justify-center items-center">
                                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-lg overflow-hidden">
                                    <Image
                                        src={images[selectedImageIndex].src}
                                        alt={images[selectedImageIndex].alt}
                                        fill
                                        className="object-contain p-2 md:p-4"
                                    />
                                </div>
                            </div>

                            {/* Thumbnails */}
                            <div className="flex justify-center md:justify-start md:items-center">
                                <div className="grid grid-cols-4 md:grid-cols-1 gap-1.5 sm:gap-2 md:gap-3">
                                    {images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImageIndex(index)}
                                            className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-md md:rounded-lg overflow-hidden transition-all hover:opacity-75 ${selectedImageIndex === index
                                                ? 'ring-2 ring-blue-500'
                                                : ''
                                                }`}
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-contain p-1 sm:p-1.5 md:p-2"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Description */}
                    <div className="flex flex-col gap-4 text-[14px] md:text-[16px]">
                        <p>Real time oil condition analysis sensor with integrated intelligent equipment maintenance optimisation analytics for all industrial and commercial applications.</p>
                        <p>OQSx-G2 delivers the ultimate high-quality real-time oil condition analysis. This enables multiple tangible operating benefits that include reduced maintenance costs, improved reliability, reduced oil wastage, and extended equipment life.</p>
                        <p>Our unique FSH™ core technology analyses oil condition holistically, detecting, measuring and tracking all and any contamination or wear with 0.01% sensitivity (100ppm) – other sensor systems typically look at specific parameters and ignore others. This unmatched real-time complete oil analysis capability is achieved through continuous analysis of the electro-chemical properties of the oil at a molecular level.</p>
                        <p>OQSx-G2 analysis data provides unrivalled high-confidence insight into real-time equipment health and maintenance status. Reliable forecasting and planning of maintenance based upon actual equipment need and thus extended optimised maintenance intervals and reduced cost becomes possible; with the assurance and safety of continuous over-watch that detects any unexpected anomalies and or contamination.</p>
                        <p>OQSx-G2 works with any oil type and is easily fitted to any equipment operating in any environment or application.</p>
                    </div>
                    <div className="flex flex-col gap-4 py-10">
                        <h1 className="text-[16px] font-bold uppercase md:text-[24px]">Oil Interpreting Guide</h1>
                        <AspectRatio ratio={16 / 9} className="relative border rounded-md overflow-hidden">
                            <Image
                                src="/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-3.png"
                                alt="Oil Interpreting Guide"
                                fill
                                className="rounded-md object-cover"
                            />
                        </AspectRatio>
                    </div>

                    {/* Technical Specifications Table */}
                    <div>
                        <TechnicalSpecsTable sections={oqsxG2OilQualitySensorSpecs} />
                    </div>

                </div>
            </div>
        </div>
    )
}