import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MD4074QuadPage() {
  const product = systemsProductMapping['/products/systems/motec/monitors/md4074-quad-ip30-ip67-heavy-duty-monitor'];
  return <DynamicProductPage productData={product} />;
} 