import { memo } from "react";
import { X } from "lucide-react";
import { ProductCategory } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { NavigationItemComponent } from "./NavigationItem";
import { SIDEBAR_STYLES } from "./styles";

interface MobileSidebarProps {
  category: ProductCategory;
  currentSlugPath: string[];
  isOpen: boolean;
  onClose: () => void;
  expandedItems: Set<string>;
  toggleExpanded: (path: string) => void;
}

export const MobileSidebar = memo<MobileSidebarProps>(({ 
  category, 
  currentSlugPath, 
  isOpen, 
  onClose, 
  expandedItems,
  toggleExpanded
}) => {
  if (!isOpen) return null;

  return (
    <div className={SIDEBAR_STYLES.mobileOverlay}>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Sidebar Panel */}
      <aside 
        className={SIDEBAR_STYLES.mobilePanel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-sidebar-title"
      >
        <div className="p-4">
          <header className="flex items-center justify-between mb-4">
            <h3 
              id="mobile-sidebar-title"
              className="text-lg font-bold text-gray-900"
            >
              {category.label}
            </h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              <X className="h-4 w-4" />
            </Button>
          </header>
          
          <nav 
            className="space-y-1"
            role="navigation"
            aria-label={`${category.label} mobile navigation`}
          >
            {category.children.map((item, index) => (
              <NavigationItemComponent
                key={`mobile-${item.slug}-${index}`}
                item={item}
                level={0}
                slugPath={[category.slug, item.slug]}
                currentSlugPath={currentSlugPath}
                onItemClick={onClose}
                expandedItems={expandedItems}
                toggleExpanded={toggleExpanded}
              />
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
});

MobileSidebar.displayName = "MobileSidebar";
