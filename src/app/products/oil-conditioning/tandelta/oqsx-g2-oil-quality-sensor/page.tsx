import DynamicProductPage from "@/components/DynamicProductPage"
import { oqsxG2OilQualitySensorData } from "@/lib/oil-conditioning-products"

export default function Page() {
    return <DynamicProductPage productData={oqsxG2OilQualitySensorData} />
}