'use client';
import DynamicProductPage from '@/components/DynamicProductPage';
import { motMobileOilTestKitData } from '@/lib/oil-conditioning-products';

export default function MOTMobileOilTestKitPage() {
    return <DynamicProductPage productData={motMobileOilTestKitData} />;
}
