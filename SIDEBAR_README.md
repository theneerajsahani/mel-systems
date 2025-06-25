# Product Sidebar System

This project includes a comprehensive, reusable sidebar navigation system for product pages.

## Components

### 1. ProductSidebar
A fully-featured sidebar component that automatically shows the correct navigation based on the current page URL.

**Features:**
- Automatic navigation detection based on current path
- Collapsible/expandable menu items
- Active state highlighting
- Mobile responsive with slide-out menu
- Support for nested product categories

### 2. ProductLayout
A wrapper component that provides consistent layout for product pages including breadcrumbs, sidebar, and main content area.

### 3. Navigation Data Structure
Located in `/src/lib/navigation.ts` - contains all navigation data in a hierarchical structure.

## Usage

### Quick Setup (Recommended)
Use the ProductLayout component for consistent product page layouts:

```tsx
import ProductLayout from "@/components/ProductLayout";

export default function MyProductPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Oil Conditioning", href: "/products/oil-conditioning" },
    { label: "TanDelta", href: "/products/oil-conditioning/tandelta" },
    { label: "My Product" }
  ];

  return (
    <ProductLayout breadcrumbItems={breadcrumbItems}>
      <h1>My Product</h1>
      <p>Product content goes here...</p>
    </ProductLayout>
  );
}
```

### Manual Setup
If you need more control over the layout:

```tsx
import ProductSidebar from "@/components/ProductSidebar";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";

export default function MyProductPage() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/4">
        <ProductSidebar />
      </div>
      <div className="flex-1">
        {/* Your content */}
      </div>
    </div>
  );
}
```

## Adding New Products

To add new products to the navigation, edit `/src/lib/navigation.ts`:

```typescript
export const productNavigation: ProductCategory[] = [
  {
    label: "Oil Conditioning",
    href: "/products/oil-conditioning",
    children: [
      {
        label: "TanDelta",
        href: "/products/oil-conditioning/tandelta",
        children: [
          {
            label: "New Product",
            href: "/products/oil-conditioning/tandelta/new-product"
          }
        ]
      }
    ]
  }
];
```

## Mobile Features

The sidebar automatically becomes a mobile menu on smaller screens with:
- Hamburger menu button
- Slide-out navigation panel
- Touch-friendly interactions
- Automatic close on navigation

## Customization

The sidebar supports:
- Custom CSS classes via `className` prop
- Nested navigation up to 3 levels deep
- Automatic active state detection
- Hover effects and transitions

## File Structure

```
src/
├── components/
│   ├── ProductSidebar.tsx     # Main sidebar component
│   ├── ProductLayout.tsx      # Layout wrapper component
│   └── ProductBreadcrumb.tsx  # Breadcrumb component
└── lib/
    └── navigation.ts          # Navigation data structure
```

## Examples

The sidebar is currently implemented on:
- `/products/oil-conditioning/tandelta/oqsx-g2-oil-quality-sensor`
- `/products/oil-conditioning/hydrotechnik/watchlog-usb/watchlog-usb-dual-pressure-and-temperature-sensor`
- All TanDelta and Hydrotechnik product pages

Navigate to any of these pages to see the sidebar in action!
