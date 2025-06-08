import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between px-16 py-2">
      <img src="/Mel-systems-logo.png" alt="Mel Systems" className="h-10"/>
      <div>
        <NavigationMenu>
          <NavigationMenuList>

            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/home">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Products */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/products">Products</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Applications */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/applications">Applications</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Careers */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/careers">Careers</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}