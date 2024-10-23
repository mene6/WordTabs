
// DockViewNavbar.tsx
import WTLogoOfficial from '@/Components/icons/logo-official-stroked';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { SidebarTrigger } from '../Admin/sidebar';
import { ThemeColorSwatchToggle } from '../theme/theme-color-swatch-toggle';
import { ThemeModeToggle } from '../theme/theme-mode-toggle';

interface NavbarProps {
    className?: string
}

export default function NavbarAdmin({ className }: NavbarProps) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);


    return (
        <div className={cn("z-50 flex justify-between items-center space-x-2 bg-background/80 backdrop-blur p-2 w-full h-full tabs-header", className)}>
            <Link href="/" className='flex flex-col justify-center items-center bg-background hover:bg-background-secondary p-[.45rem] border border-border rounded-sm w-10 h-full text-accent-foreground hover:text-primary transition-all'>
                <WTLogoOfficial width={25} height={25} strokewidth={30} />

            </Link>
            <SidebarTrigger className='flex flex-col justify-center items-center bg-background hover:bg-background-secondary p-[.45rem] border border-border rounded-sm w-10 h-full text-accent-foreground hover:text-primary transition-all' />
            <nav className="flex flex-row flex-grow justify-center items-center">
                {/* 
                <NavLink
                    href={route('dashboard')}
                    active={route().current('dashboard')}
                >
                    Dashboard
                </NavLink> */}


                {/* 
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent rounded-md font-medium text-foreground text-sm hover:text-gray-700 leading-4 transition duration-150 ease-in-out focus:outline-none"
                            >
                                {user.name}

                                <svg
                                    className="w-4 h-4 -me-0.5 ms-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link
                            href={route('profile.edit')}
                        >
                            Profile
                        </Dropdown.Link>
                        <Dropdown.Link
                            href={route('logout')}
                            method="post"
                            as="button"
                        >
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown> */}


                <div className="flex items-center sm:hidden -me-2">
                    <button
                        onClick={() =>
                            setShowingNavigationDropdown(
                                (previousState) => !previousState,
                            )
                        }
                        className="inline-flex justify-center items-center hover:bg-gray-100 focus:bg-gray-100 p-2 rounded-md text-gray-400 hover:text-gray-500 focus:text-gray-500 transition duration-150 ease-in-out focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className={
                                    !showingNavigationDropdown
                                        ? 'inline-flex'
                                        : 'hidden'
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={
                                    showingNavigationDropdown
                                        ? 'inline-flex'
                                        : 'hidden'
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>



                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="space-y-1 pt-2 pb-3">
                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-gray-200 pt-4 pb-1 border-t">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {user.name}
                            </div>
                            <div className="font-medium text-gray-500 text-sm">
                                {user.email}
                            </div>
                        </div>

                        <div className="space-y-1 mt-3">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <ThemeColorSwatchToggle />
            <ThemeModeToggle />
        </div>
    );
}
