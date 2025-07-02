import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MVCU1400Page() {
  const product = systemsProductMapping['/products/systems/motec/video-control-units/mvcu1400'];
  return <DynamicProductPage productData={product} />;
} 