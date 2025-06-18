import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
    label: string
    href?: string
}

interface ProductBreadcrumbProps {
    items: BreadcrumbItem[]
    className?: string
}

export default function ProductBreadcrumb({ 
    items, 
    className = "hidden md:block"
}: ProductBreadcrumbProps) {
    return (
        <div className={className}>
            <Breadcrumb className="py-3">
                <BreadcrumbList className="text-xs">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <BreadcrumbItem>
                                {item.href ? (
                                    <BreadcrumbLink 
                                        href={item.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 capitalize text-xs font-normal"
                                    >
                                        {item.label}
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage className="text-foreground font-normal text-xs capitalize">
                                        {item.label}
                                    </BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {index < items.length - 1 && (
                                <BreadcrumbSeparator className="mx-2">
                                    <ChevronRight className="h-4 w-4 text-muted-foreground/60" />
                                </BreadcrumbSeparator>
                            )}
                        </div>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
            
            {/* Optional: Add a subtle bottom border */}
            <div className="border-b border-border/50 mt-2"></div>
        </div>
    )
}