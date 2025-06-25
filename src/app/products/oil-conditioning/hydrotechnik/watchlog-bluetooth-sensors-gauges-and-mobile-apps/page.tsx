'use client';
import DynamicProductPage from '@/components/DynamicProductPage';
import { watchlogBluetoothCategoryData } from '@/lib/products';

export default function WatchlogBluetoothPage() {
    return <DynamicProductPage productData={watchlogBluetoothCategoryData} />;
}
