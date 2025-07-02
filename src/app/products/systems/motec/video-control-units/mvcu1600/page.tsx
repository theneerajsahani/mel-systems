import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MVCU1600Page() {
  const product = systemsProductMapping['/products/systems/motec/video-control-units/mvcu1600'];
  return <DynamicProductPage productData={product} />;
} 