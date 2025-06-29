'use client';
import DynamicProductPage from '@/components/DynamicProductPage';
import { watchlogBluetoothSensorsGaugesAndMobileAppsData } from '@/lib/oil-conditioning-products';

export default function WatchlogBluetoothPage() {
    return <DynamicProductPage productData={watchlogBluetoothSensorsGaugesAndMobileAppsData} />;
}
