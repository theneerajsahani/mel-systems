'use client';
import DynamicProductPage from '@/components/DynamicProductPage';
import { motMobileOilTestKitData } from '@/lib/products';

export default function MOTMobileOilTestKitPage() {
    return <DynamicProductPage productData={motMobileOilTestKitData} />;
}
