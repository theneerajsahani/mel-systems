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
        <>
            <div className="py-12 sm:py-16 md:py-20 lg:py-[100px] px-4 sm:px-6 md:px-8 lg:px-[64px]">
                <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold">PRODUCTS</h1>
            </div>
            <div className="px-4 sm:px-6 md:px-8 lg:px-[64px]">
                <div className="flex flex-col lg:flex-row py-8 md:py-10 border-t border-black">
                    {/* Title */}
                    <div className="flex flex-col gap-3 md:gap-4 lg:w-[350px]">
                        <p className="text-xl sm:text-2xl md:text-[32px] font-bold">Oil Conditioning</p>
                        <p className="text-sm md:text-base">Description</p>
                        <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                            <div className="flex items-center gap-2">
                                <span className="text-sm md:text-base">Explore all products</span>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </div>
                        </Link>
                    </div>
                    {/* Products Carousel */}
                    <div className="flex-grow min-w-0 lg:max-w-[900px] lg:ml-[theme('spacing.28')]">
                        <Carousel opts={{
                            align: "start",
                            loop: true,
                            slidesToScroll: 1,
                        }}>
                            <CarouselContent className="gap-x-4">
                                <CarouselItem className="basis-full md:basis-1/2 lg:basis-[calc(33.33%-theme('spacing.4')*2/3)]">
                                    <ProductCard 
                                        image="/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg"
                                        name="Tandelta"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-full md:basis-1/2 lg:basis-[calc(33.33%-theme('spacing.4')*2/3)]">
                                    <ProductCard 
                                        image="/products/oil conditioning/Hydrotechnik/Watchlog-USB/Wactchlog USB.png"
                                        name="Hydrotechnik"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-full md:basis-1/2 lg:basis-[calc(33.33%-theme('spacing.4')*2/3)]">
                                    <ProductCard 
                                        image="/products/oil conditioning/Filtertechnik/S120 Digital Imaging Particle Counter/S120 Digital Imaging Particle Counter.png"
                                        name="Filtertechnik"
                                    />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex" />
                            <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8 lg:px-[64px] pt-[320px]">
                <div className="flex flex-col lg:flex-row py-8 md:py-10 border-t border-black">
                    {/* Title */}
                    <div className="flex flex-col gap-3 md:gap-4 lg:w-[350px]">
                        <p className="text-xl sm:text-2xl md:text-[32px] font-bold">Systems</p>
                        <p className="text-sm md:text-base">Description</p>
                        <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                            <div className="flex items-center gap-2">
                                <span className="text-sm md:text-base">Explore all products</span>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </div>
                        </Link>
                    </div>
                    {/* Products Carousel */}
                    <div className="flex-grow min-w-0 lg:max-w-[900px] lg:ml-[theme('spacing.28')]">
                        <Carousel opts={{
                            align: "start",
                            loop: true,
                            slidesToScroll: 1,
                        }}>
                            <CarouselContent className="gap-x-4">
                                <CarouselItem className="basis-full md:basis-1/2 lg:basis-[calc(33.33%-theme('spacing.4')*2/3)]">
                                    <ProductCard 
                                        image="/products/systems/Motec/Rear view cameras/MC7180N/MC7180N.png"
                                        name="Rear View Camera"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-full md:basis-1/2 lg:basis-[calc(33.33%-theme('spacing.4')*2/3)]">
                                    <ProductCard 
                                        image="/products/systems/Motec/Front camera system/MC3050B-4-VKMS/MC3050B-4-VKMS.png"
                                        name="Front Camera Systems"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-full md:basis-1/2 lg:basis-[calc(33.33%-theme('spacing.4')*2/3)]">
                                    <ProductCard 
                                        image="/products/systems/Motec/Video control units/MVCU1600/MVCU1600.png"
                                        name="MVCU1600"
                                    />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex" />
                            <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}