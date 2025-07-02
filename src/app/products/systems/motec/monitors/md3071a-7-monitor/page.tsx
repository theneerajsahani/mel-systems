import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MD3071APage() {
  const product = systemsProductMapping['/products/systems/motec/monitors/md3071a-7-monitor'];
  return <DynamicProductPage productData={product} />;
} 