'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

export default function TandeltaPage() {
    const pathname = usePathname();
    return (
        <div className='flex flex-col px-4 md:px-8 lg:px-16 xl:px-16'>
            {/* Heading */}
            <div className='flex flex-col gap-2 py-16'>
                <h1 className='text-[24px] font-bold md:text-[32px]'>Oil Conditioning</h1>
                <p className='text-[14px] lg:text-[20px]'>Description</p>
            </div>
            {/* Divider */}
            <div className='border'></div>
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
                    <h3 className='text-[24px] font-bold'>Tandelta</h3>
                    {/* Products Grid - responsive columns that fill container */}
                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-8'>
                        <ProductCard
                            image='/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg'
                            name='OQSx-G2 Oil Quality Sensor'
                        />
                        <ProductCard
                            image='/products/oil conditioning/Tandelta/OQSx-G2 HAZ Oil Quality Sensor/OQSx-G2 HAZ Oil Quality Sensor.jpg'
                            name='OQSx-G2 HAZ Oil Quality Sensor'
                        />
                        <ProductCard
                            image='/products/oil conditioning/Tandelta/MOT – Mobile Oil Test Kit/MOT – Mobile Oil Test Kit.png'
                            name='MOT – Mobile Oil Test Kit'
                        />
                        <ProductCard
                            image='/products/oil conditioning/Tandelta/OQSX-G2 Sensor kit/OQSX-G2 Sensor kit.jpg'
                            name='OQSX-G2 Sensor kit'
                        />
                        <ProductCard
                            image='/products/oil conditioning/Tandelta/SENSE2 Display Kit/SENSE2 Display Kit.jpg'
                            name='SENSE2 Display Kit'
                        />
                        <ProductCard
                            image='/products/oil conditioning/Tandelta/SENSE3 Gateway Kit/SENSE3 Gateway Kit.jpg'
                            name='SENSE3 Gateway Kit'
                        />
                        <ProductCard
                            image='/products/oil conditioning/Tandelta/Gateway (OQTg)/Gateway (OQTg).jpg'
                            name='Gateway (OQTg)'
                        />
                        <ProductCard
                            image='/products/oil conditioning/Tandelta/OQDe-G2 Display Express/OQDe-G2 Display Express.jpg'
                            name='OQDe-G2 Display Express'
                        />
                        <ProductCard
                            image='/products/oil conditioning/Tandelta/Gateway Hub/Gateway Hub.jpg'
                            name='Gateway Hub'
                        />
                        <ProductCard
                            image='/products/oil conditioning/Tandelta/Manifold/Manifold.jpg'
                            name='Manifold'
                        />
                        <ProductCard
                            image='/products/oil conditioning/Tandelta/Cables/Cable-BBSt.png'
                            name='Cables'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}