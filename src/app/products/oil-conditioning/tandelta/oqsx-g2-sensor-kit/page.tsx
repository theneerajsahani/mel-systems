import DynamicProductPage from "@/components/DynamicProductPage"
import { oqsxG2SensorKitData } from "@/lib/oil-conditioning-products"

export default function Page() {
    return <DynamicProductPage productData={oqsxG2SensorKitData} />
}
