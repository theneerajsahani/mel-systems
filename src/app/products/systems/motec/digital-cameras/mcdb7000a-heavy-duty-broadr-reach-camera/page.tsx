import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MCDB7000APage() {
  const product = systemsProductMapping['/products/systems/motec/digital-cameras/mcdb7000a'];
  return <DynamicProductPage productData={product} />;
} 