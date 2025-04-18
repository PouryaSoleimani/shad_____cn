import { IoIosSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BsInboxFill } from "react-icons/bs";
import { SiAdidas } from "react-icons/si";
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu"



const components: { title: string; href: string; description: string }[] = [
    { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal dialog that interrupts the user with important content and expects a response.", },
    { title: "Hover Card", href: "/docs/primitives/hover-card", description: "For sighted users to preview content available behind a link.", },
    { title: "Progress", href: "/docs/primitives/progress", description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.", },
    { title: "Scroll-area", href: "/docs/primitives/scroll-area", description: "Visually or semantically separates content.", },
    { title: "Tabs", href: "/docs/primitives/tabs", description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.", },
    { title: "Tooltip", href: "/docs/primitives/tooltip", description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.", },
]


//COMPONENT
export function NavbarComponent() {
    return (
        <div className="flex sticky top-0 left-0 items-center justify-between py-3 px-6 z-50 bg-black/50 backdrop-blur-lg">
            <SiAdidas className="w-10 h-10" />
            <NavigationMenu className="translate-x-10">

                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-black text-white">
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-zinc/900 to-black p-6 no-underline outline-none focus:shadow-md" href="/"  >
                                            <SiAdidas className="w-24 h-24" />
                                            <div className="mb-2 mt-4 text-lg font-medium">  shadcn/ui </div>
                                            <p className="text-sm leading-tight text-muted-foreground">      Beautifully designed components built with Radix UI and      Tailwind CSS.  </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-black text-white">
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                    <ListItem key={component.title} title={component.title} href={component.href}      >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <span className="px-6">Articles</span>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <span className="px-6">Products</span>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                </NavigationMenuList>

            </NavigationMenu>

            <div id="ICONS" className="bg-zinc-900 rounded-lg p-2 flex items-center justify-evenly gap-2">
                <BsInboxFill className="bg-zinc-700 hover:bg-black text-white p-1 w-8 h-8 rounded" />
                <FaUserAlt className="bg-zinc-700 hover:bg-black text-white p-1 w-8 h-8 rounded" />
                <BsFillCartFill className="bg-zinc-700 hover:bg-black text-white p-1 w-8 h-8 rounded" />
                <IoIosSettings className="bg-zinc-700 hover:bg-black text-white p-1 w-8 h-8 rounded" />
                <IoMdLogOut className="bg-zinc-700 hover:bg-black text-white p-1 w-8 h-8 rounded" />
            </div>
        </div>
    )
}



const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink>
                <a
                    ref={ref}
                    className={cn("block z-50 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">  {children} </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
