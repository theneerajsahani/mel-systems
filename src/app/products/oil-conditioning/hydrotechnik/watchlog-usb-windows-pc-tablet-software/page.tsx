import DynamicProductPage from "@/components/DynamicProductPage"
import { watchlogUSBSoftwareData } from "@/lib/oil-conditioning-products"

export default function watchlogUSBSoftwarePage() {
    return <DynamicProductPage productData={watchlogUSBSoftwareData} />
}
