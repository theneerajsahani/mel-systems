import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MC3000CIrWlPage() {
  const product = systemsProductMapping['/products/systems/motec/rear-view-cameras/mc3000c-ir-wl-night-vision-compatible-heavy-duty-infrared-camera-with-built-in-light'];
  return <DynamicProductPage productData={product} />;
} 