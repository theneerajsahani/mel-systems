import { memo, useCallback, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationItem } from "@/lib/navigation";
import { SIDEBAR_STYLES } from "./styles";

interface NavigationItemProps {
  item: NavigationItem;
  level: number;
  currentPath: string;
  expandedItems: Set<string>;
  toggleExpanded: (path: string) => void;
  onItemClick?: () => void;
}

// Helper function to check if an item or its children are active
function isItemOrChildrenActive(item: NavigationItem, currentPath: string): boolean {
  if (item.href === currentPath) return true;
  if (!item.children) return false;
  
  return item.children.some(child => isItemOrChildrenActive(child, currentPath));
}

export const NavigationItemComponent = memo<NavigationItemProps>(({ 
  item, 
  level, 
  currentPath, 
  expandedItems,
  toggleExpanded,
  onItemClick
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href === currentPath;
  const isParentOfActive = hasChildren && isItemOrChildrenActive(item, currentPath);
  const itemKey = item.href || item.label;
  
  // Smart expansion logic
  const shouldExpand = useMemo(() => {
    if (level === 0) return true; // Always expand brands (level 0)
    if (isParentOfActive) return true; // Expand if contains active item
    if (expandedItems.has(itemKey)) return true; // Manual expansion
    return false;
  }, [level, isParentOfActive, expandedItems, itemKey]);

  const isExpanded = shouldExpand;

  const handleToggle = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasChildren) {
      toggleExpanded(itemKey);
    }
  }, [hasChildren, toggleExpanded, itemKey]);

  // Enhanced styling for different levels and states
  const getItemStyles = () => {
    const levelStyle = SIDEBAR_STYLES.navigationItem.level[level as keyof typeof SIDEBAR_STYLES.navigationItem.level] 
      || SIDEBAR_STYLES.navigationItem.level.default;
    
    const stateStyles = [
      SIDEBAR_STYLES.navigationItem.states.hover,
      SIDEBAR_STYLES.navigationItem.states.focus,
      isActive && SIDEBAR_STYLES.navigationItem.states.active,
      isParentOfActive && !isActive && SIDEBAR_STYLES.navigationItem.states.parentOfActive,
    ].filter(Boolean).join(" ");
    
    return cn(
      SIDEBAR_STYLES.navigationItem.base,
      levelStyle,
      stateStyles
    );
  };

  const getMarginLeft = () => {
    return level > 0 ? `${Math.min(level * 12, 48)}px` : '0px';
  };

  if (hasChildren) {
    return (
      <div className="w-full">
        <div
          className={getItemStyles()}
          style={{ marginLeft: getMarginLeft() }}
          role="treeitem"
          aria-expanded={isExpanded}
          aria-level={level + 1}
          aria-selected={isActive}
        >
          {item.href ? (
            <Link 
              href={item.href} 
              className="flex-1 flex items-center min-w-0 focus:outline-none" 
              onClick={onItemClick}
              tabIndex={-1} // Parent div handles focus
            >
              <span className="truncate" title={item.label}>{item.label}</span>
            </Link>
          ) : (
            <span className="flex-1 truncate" title={item.label}>{item.label}</span>
          )}
          
          <button
            onClick={handleToggle}
            className={SIDEBAR_STYLES.expandButton}
            aria-label={isExpanded ? `Collapse ${item.label}` : `Expand ${item.label}`}
            tabIndex={0}
          >
            {isExpanded ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </button>
        </div>
        
        {isExpanded && (
          <div 
            className={SIDEBAR_STYLES.childrenContainer}
            role="group"
            aria-label={`${item.label} submenu`}
          >
            {item.children!.map((child, index) => (
              <NavigationItemComponent
                key={`${child.href || child.label}-${index}`}
                item={child}
                level={level + 1}
                currentPath={currentPath}
                onItemClick={onItemClick}
                expandedItems={expandedItems}
                toggleExpanded={toggleExpanded}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={getItemStyles()}
      style={{ marginLeft: getMarginLeft() }}
      role="treeitem"
      aria-level={level + 1}
      aria-selected={isActive}
    >
      {item.href ? (
        <Link 
          href={item.href} 
          className="block truncate w-full focus:outline-none" 
          onClick={onItemClick} 
          title={item.label}
        >
          {item.label}
        </Link>
      ) : (
        <span className="block truncate" title={item.label}>{item.label}</span>
      )}
    </div>
  );
});

NavigationItemComponent.displayName = "NavigationItemComponent";
