'use client';
import DynamicProductPage from '@/components/DynamicProductPage';
import { watchlogUSBCategoryData } from '@/lib/products';

export default function WatchlogUSBPage() {
    return <DynamicProductPage productData={watchlogUSBCategoryData} />;
}
