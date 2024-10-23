import { Briefcase, Calendar, ChartBar, ChevronDown, ChevronUp, Database, FileImage, Folder, Home, Image, Inbox, MoreHorizontal, User2 } from "lucide-react";

import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import ResponsiveNavLink from '../ResponsiveNavLink';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem
} from "./sidebar";



export function AdminSidebar() {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <Sidebar side='left' variant='sidebar' collapsible='offcanvas' className='mt-[60px]'>

            <SidebarHeader className='min-h-[56px]'>
                <SidebarMenu className='nothing'>
                    {/* <SidebarMenuItem className='border border-border rounded-md'> */}
                    <SidebarMenuItem className='nothing'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className='flex flex-row flex-grow h-full'>
                                <SidebarMenuButton variant='outline' className='hover:bg-foreground/5 focus:bg-foreground/5 keep-all'>
                                    Content Management
                                    <ChevronDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                                <DropdownMenuItem>
                                    <span>WordTabs Inc.</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>WordTabs Corp.</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>




            <SidebarContent className='gap-0'>

                <Collapsible defaultOpen className="border-t border-border group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Tools
                                <ChevronDown className="group-data-[state=open]/collapsible:rotate-180 ml-auto transition-transform" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>

                        <CollapsibleContent>
                            <SidebarGroupContent>
                                {menuTools.map((item, index) => (
                                    <SidebarMenuItem key={index} className="group/sidebar-item">
                                        <SidebarMenuButton asChild>
                                            <a className='font-medium text-sm decoration-transparent' href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                        {item.actions && (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <SidebarMenuAction className="opacity-0 group-hover/sidebar-item:opacity-100 transition-opacity duration-300 ease-in-out">
                                                        <MoreHorizontal />
                                                    </SidebarMenuAction>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent side="right" align="start">
                                                    {item.actions.map((action, actionIndex) => (
                                                        <DropdownMenuItem key={actionIndex}>
                                                            <span>{action.title}</span>
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )}
                                    </SidebarMenuItem>
                                ))}
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

                <Collapsible defaultOpen className="border-t border-border group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Content
                                <ChevronDown className="group-data-[state=open]/collapsible:rotate-180 ml-auto transition-transform" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>

                        <CollapsibleContent>
                            <SidebarGroupContent>
                                {menuContent.map((item, index) => (
                                    <SidebarMenuItem key={index} className="group/sidebar-item">
                                        <SidebarMenuButton asChild>
                                            <a className='font-medium decoration-transparent' href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                        {item.actions && (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <SidebarMenuAction className="opacity-0 group-hover/sidebar-item:opacity-100 transition-opacity duration-300 ease-in-out">
                                                        <MoreHorizontal />
                                                    </SidebarMenuAction>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent side="right" align="start">
                                                    {item.actions.map((action, actionIndex) => (
                                                        <DropdownMenuItem key={actionIndex}>
                                                            <span>{action.title}</span>
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )}
                                    </SidebarMenuItem>
                                ))}
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

                <Collapsible defaultOpen className="border-t border-border group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Uploads
                                <ChevronDown className="group-data-[state=open]/collapsible:rotate-180 ml-auto transition-transform" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>

                        <CollapsibleContent>
                            <SidebarGroupContent>
                                {menuMedia.map((item, index) => (
                                    <SidebarMenuItem key={index} className="group/sidebar-item">
                                        <SidebarMenuButton asChild>
                                            <a className='font-medium decoration-transparent' href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                        {item.actions && (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <SidebarMenuAction className="opacity-0 group-hover/sidebar-item:opacity-100 transition-opacity duration-300 ease-in-out">
                                                        <MoreHorizontal />
                                                    </SidebarMenuAction>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent side="right" align="start">
                                                    {item.actions.map((action, actionIndex) => (
                                                        <DropdownMenuItem key={actionIndex}>
                                                            <span>{action.title}</span>
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )}
                                    </SidebarMenuItem>
                                ))}
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

            </SidebarContent>

            <SidebarFooter className='h-[110px]'>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> {user.name}
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >

                                <DropdownMenuItem>
                                    <Link
                                        href={route('dashboard')}
                                    >
                                        Dashboard
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <ResponsiveNavLink
                                        href={route('profile.edit')}
                                    >
                                        Profile
                                    </ResponsiveNavLink>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route('logout')}
                                        as="button"
                                    >
                                        Log Out
                                    </ResponsiveNavLink>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Link
                                        href={route('profile.edit')}
                                    >
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

        </Sidebar >
    )
}


const menuContent = [
    {
        title: "Pages",
        url: "#",
        icon: Home,
        actions: [
            {
                title: "New Page",
                url: "#",
            },
            {
                title: "View Pages",
                url: "#",
            },
            {
                title: "Categories",
                url: "#",
            },
        ]
    },
    {
        title: "Posts",
        url: "#",
        icon: Inbox,
        actions: [
            {
                title: "New Post",
                url: "#",
            },
            {
                title: "View Posts",
                url: "#",
            },
            {
                title: "Categories",
                url: "#",
            }
        ]
    },
    {
        title: "Events",
        url: "#",
        icon: Calendar,
        actions: [
            {
                title: "New Events",
                url: "#"
            }
        ]
    },
    {
        title: "Jobs",
        url: "#",
        icon: Briefcase,
        actions: [
            {
                title: "New Jobs",
                url: "#"
            }
        ]
    },
    {
        title: "Types",
        url: "#",
        icon: Database,
        actions: [
            {
                title: "New Types",
                url: "#"
            }
        ]
    },
]

const menuMedia = [
    {
        title: "Uploads",
        url: "#",
        icon: Image,
        actions: [
            {
                title: "New Page",
                url: "#",
            },
            {
                title: "View Pages",
                url: "#",
            },
            {
                title: "Categories",
                url: "#",
            },
        ]
    },
    {
        title: "Jpg",
        url: "#",
        icon: FileImage,
        actions: [
            {
                title: "New Post",
                url: "#",
            },
            {
                title: "View Posts",
                url: "#",
            },
            {
                title: "Categories",
                url: "#",
            }
        ]
    },
    {
        title: "Png",
        url: "#",
        icon: FileImage,
        actions: [
            {
                title: "New Events",
                url: "#"
            }
        ]
    },
    {
        title: "Icons",
        url: "#",
        icon: Folder,
        actions: [
            {
                title: "New Jobs",
                url: "#"
            }
        ]
    },
]

const menuTools = [
    {
        title: "Dashboard",
        url: "#",
        icon: Home,
        actions: [
            {
                title: "New Page",
                url: "#",
            },
            {
                title: "View Pages",
                url: "#",
            },
            {
                title: "Categories",
                url: "#",
            },
        ]
    },
    {
        title: "Analytics",
        url: "#",
        icon: ChartBar,
        actions: [
            {
                title: "New Post",
                url: "#",
            },
            {
                title: "View Posts",
                url: "#",
            },
            {
                title: "Categories",
                url: "#",
            }
        ]
    },
]

