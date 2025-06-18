import ProductCard from "@/components/ProductCard"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function products() {
    return (
        <div className="min-h-screen w-full">
            <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[100px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[64px] max-w-[1440px] mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold">PRODUCTS</h1>
            </div>
            
            {/* Oil Conditioning Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[64px] max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row py-12 sm:py-16 md:py-20 border-t border-black items-start lg:items-center gap-8 lg:gap-12">
                    {/* Title */}
                    <div className="flex flex-col gap-3 md:gap-4 lg:w-[280px] xl:w-[320px] flex-shrink-0">
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold">Oil Conditioning</p>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Description</p>
                        <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                            <div className="flex items-center gap-2">
                                <span className="text-sm md:text-base">Explore all products</span>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </div>
                        </Link>
                    </div>
                    {/* Products Carousel */}
                    <div className="w-full lg:flex-1 lg:max-w-[800px] px-4 sm:px-8 lg:px-12">
                        <Carousel opts={{
                            align: "start",
                            loop: true,
                            slidesToScroll: 1,
                        }} className="w-full">
                            <CarouselContent className="-ml-2 md:-ml-4 gap-0">
                                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                    <ProductCard 
                                        image="/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg"
                                        name="Tandelta"
                                    />
                                </CarouselItem>
                                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                    <ProductCard 
                                        image="/products/oil conditioning/Hydrotechnik/Watchlog-USB/Wactchlog USB.png"
                                        name="Hydrotechnik"
                                    />
                                </CarouselItem>
                                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                    <ProductCard 
                                        image="/products/oil conditioning/Filtertechnik/S120 Digital Imaging Particle Counter/S120 Digital Imaging Particle Counter.png"
                                        name="Filtertechnik"
                                    />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex items-center justify-center" />
                            <CarouselNext className="hidden sm:flex items-center justify-center" />
                        </Carousel>
                    </div>
                </div>
            </div>
            
            {/* Systems Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[64px] max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row py-12 sm:py-16 md:py-20 border-t border-black items-start lg:items-center gap-8 lg:gap-12">
                    {/* Title */}
                    <div className="flex flex-col gap-3 md:gap-4 lg:w-[280px] xl:w-[320px] flex-shrink-0">
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold">Systems</p>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Description</p>
                        <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                            <div className="flex items-center gap-2">
                                <span className="text-sm md:text-base">Explore all products</span>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </div>
                        </Link>
                    </div>
                    {/* Products Carousel */}
                    <div className="w-full lg:flex-1 lg:max-w-[800px] px-4 sm:px-8 lg:px-12">
                        <Carousel opts={{
                            align: "start",
                            loop: true,
                            slidesToScroll: 1,
                        }} className="w-full">
                            <CarouselContent className="-ml-2 md:-ml-4 gap-0">
                                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                    <ProductCard 
                                        image="/products/systems/Motec/Rear view cameras/MC7180N/MC7180N.png"
                                        name="Rear View Camera"
                                    />
                                </CarouselItem>
                                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                    <ProductCard 
                                        image="/products/systems/Motec/Front camera system/MC3050B-4-VKMS/MC3050B-4-VKMS.png"
                                        name="Front Camera Systems"
                                    />
                                </CarouselItem>
                                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                    <ProductCard 
                                        image="/products/systems/Motec/Video control units/MVCU1600/MVCU1600.png"
                                        name="MVCU1600"
                                    />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex items-center justify-center" />
                            <CarouselNext className="hidden sm:flex items-center justify-center" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}