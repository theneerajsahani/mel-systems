"use client";

import { useState, useCallback, memo } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { findCurrentNavigationBySlugs, buildHrefFromSlugs } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { NavigationItemComponent } from "./NavigationItem";
import { MobileSidebar } from "./MobileSidebar";
import { useExpandedItems } from "./hooks/useExpandedItems";
import { SIDEBAR_STYLES } from "./styles";

interface ProductSidebarProps {
  className?: string;
}

const ProductSidebar = memo(({ className }: ProductSidebarProps) => {
  const pathname = usePathname();
  // Parse the current path into slugs (assuming /products/slug1/slug2...)
  const slugPath = pathname.replace(/^\/products\/?/, "").split("/").filter(Boolean);
  const { category } = findCurrentNavigationBySlugs(slugPath);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Custom hook for managing expanded items
  const { expandedItems, toggleExpanded } = useExpandedItems(category, slugPath);

  const handleCloseMobile = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleOpenMobile = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  if (!category) {
    return null;
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={handleOpenMobile}
          className={SIDEBAR_STYLES.mobileButton}
          aria-label={`Browse ${category.label} products`}
        >
          <Menu className="h-4 w-4" />
          Browse {category.label}
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <aside 
        className={cn(SIDEBAR_STYLES.desktop, className)}
        aria-label={`${category.label} navigation`}
      >
        <div className="space-y-2">
          <header className={SIDEBAR_STYLES.header}>
            <h3 className="text-lg font-bold text-gray-900">
              {category.label}
            </h3>
          </header>
          
          <nav className="space-y-1" role="navigation" aria-label={`${category.label} products`}>
            {category.children.map((item, index) => (
              <NavigationItemComponent
                key={`${item.slug}-${index}`}
                item={item}
                level={0}
                slugPath={[category.slug, item.slug]}
                currentSlugPath={slugPath}
                expandedItems={expandedItems}
                toggleExpanded={toggleExpanded}
              />
            ))}
          </nav>
        </div>
      </aside>

      <MobileSidebar
        category={category}
        currentSlugPath={slugPath}
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobile}
        expandedItems={expandedItems}
        toggleExpanded={toggleExpanded}
      />
    </>
  );
});

ProductSidebar.displayName = "ProductSidebar";

export default ProductSidebar;
