import { AdminSidebar } from '@/Components/Admin/AdminSidebar';
import { SidebarProvider } from '@/Components/Admin/sidebar';
//import { SidebarProvider, SidebarTrigger } from '@/Components/Admin/sidebar';
import NavbarAdmin from '@/Components/global/NavbarAdmin';
import { Home } from 'lucide-react';
import { PropsWithChildren, ReactNode } from 'react';
import { RxSlash } from "react-icons/rx";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    // const user = usePage().props.auth.user;

    // const [showingNavigationDropdown, setShowingNavigationDropdown] =
    //     useState(false);

    return (
        <div className="min-h-screen">
            {/* <nav className="border-gray-100 bg-white border-b">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                           <div className="flex items-center shrink-0">
                                <Link href="/">
                                    <ApplicationLogo className="block w-auto h-9 text-gray-800 fill-current" />
                                </Link>
                            </div>

                            <div className="sm:flex space-x-8 hidden sm:-my-px sm:ms-10">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center bg-white px-3 py-2 border border-transparent rounded-md font-medium text-gray-500 text-sm hover:text-gray-700 leading-4 transition duration-150 ease-in-out focus:outline-none"
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
                                </Dropdown>
                            </div>
                        </div>

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
                    </div>
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
            </nav> */}

            <SidebarProvider>
                <div className="relative flex">
                    <NavbarAdmin className="top-0 z-50 fixed flex border-b border-border w-[calc(100%-1px)] h-[60px]" />
                </div>

                <AdminSidebar />

                <main className='flex flex-col flex-grow mt-[60px]'>

                    {header && (
                        <header className="flex flex-row justify-start items-stretch gap-2 p-2 border-b border-border text-foreground text-sm leading-tight">

                            <div className='flex flex-row justify-center items-center gap-2 bg-foreground/5 px-2 border border-border rounded-lg cursor-pointer'>
                                <Home className='w-4' />
                                <RxSlash />
                            </div>
                            <div className='bg-foreground/5 p-2 border border-border rounded-lg h-10 cursor-pointer'>

                                {header}
                            </div>

                        </header>
                    )}

                    {children}

                    {/* <SidebarTrigger /> */}
                </main>
            </SidebarProvider>

        </div>
    );
}


// export default function Authenticated({
//     header,
//     children,
// }: PropsWithChildren<{ header?: ReactNode }>) {
//     const user = usePage().props.auth.user;

//     const [showingNavigationDropdown, setShowingNavigationDropdown] =
//         useState(false);

//     return (
//         <div className="bg-gray-100 min-h-screen">
//             <nav className="border-gray-100 bg-white border-b">
//                 <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//                     <div className="flex justify-between h-16">
//                         <div className="flex">
//                             <div className="flex items-center shrink-0">
//                                 <Link href="/">
//                                     <ApplicationLogo className="block w-auto h-9 text-gray-800 fill-current" />
//                                 </Link>
//                             </div>

//                             <div className="sm:flex space-x-8 hidden sm:-my-px sm:ms-10">
//                                 <NavLink
//                                     href={route('dashboard')}
//                                     active={route().current('dashboard')}
//                                 >
//                                     Dashboard
//                                 </NavLink>
//                             </div>
//                         </div>

//                         <div className="hidden sm:ms-6 sm:flex sm:items-center">
//                             <div className="relative ms-3">
//                                 <Dropdown>
//                                     <Dropdown.Trigger>
//                                         <span className="inline-flex rounded-md">
//                                             <button
//                                                 type="button"
//                                                 className="inline-flex items-center bg-white px-3 py-2 border border-transparent rounded-md font-medium text-gray-500 text-sm hover:text-gray-700 leading-4 transition duration-150 ease-in-out focus:outline-none"
//                                             >
//                                                 {user.name}

//                                                 <svg
//                                                     className="w-4 h-4 -me-0.5 ms-2"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     viewBox="0 0 20 20"
//                                                     fill="currentColor"
//                                                 >
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                                                         clipRule="evenodd"
//                                                     />
//                                                 </svg>
//                                             </button>
//                                         </span>
//                                     </Dropdown.Trigger>

//                                     <Dropdown.Content>
//                                         <Dropdown.Link
//                                             href={route('profile.edit')}
//                                         >
//                                             Profile
//                                         </Dropdown.Link>
//                                         <Dropdown.Link
//                                             href={route('logout')}
//                                             method="post"
//                                             as="button"
//                                         >
//                                             Log Out
//                                         </Dropdown.Link>
//                                     </Dropdown.Content>
//                                 </Dropdown>
//                             </div>
//                         </div>

//                         <div className="flex items-center sm:hidden -me-2">
//                             <button
//                                 onClick={() =>
//                                     setShowingNavigationDropdown(
//                                         (previousState) => !previousState,
//                                     )
//                                 }
//                                 className="inline-flex justify-center items-center hover:bg-gray-100 focus:bg-gray-100 p-2 rounded-md text-gray-400 hover:text-gray-500 focus:text-gray-500 transition duration-150 ease-in-out focus:outline-none"
//                             >
//                                 <svg
//                                     className="w-6 h-6"
//                                     stroke="currentColor"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         className={
//                                             !showingNavigationDropdown
//                                                 ? 'inline-flex'
//                                                 : 'hidden'
//                                         }
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                     <path
//                                         className={
//                                             showingNavigationDropdown
//                                                 ? 'inline-flex'
//                                                 : 'hidden'
//                                         }
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div
//                     className={
//                         (showingNavigationDropdown ? 'block' : 'hidden') +
//                         ' sm:hidden'
//                     }
//                 >
//                     <div className="space-y-1 pt-2 pb-3">
//                         <ResponsiveNavLink
//                             href={route('dashboard')}
//                             active={route().current('dashboard')}
//                         >
//                             Dashboard
//                         </ResponsiveNavLink>
//                     </div>

//                     <div className="border-gray-200 pt-4 pb-1 border-t">
//                         <div className="px-4">
//                             <div className="font-medium text-base text-gray-800">
//                                 {user.name}
//                             </div>
//                             <div className="font-medium text-gray-500 text-sm">
//                                 {user.email}
//                             </div>
//                         </div>

//                         <div className="space-y-1 mt-3">
//                             <ResponsiveNavLink href={route('profile.edit')}>
//                                 Profile
//                             </ResponsiveNavLink>
//                             <ResponsiveNavLink
//                                 method="post"
//                                 href={route('logout')}
//                                 as="button"
//                             >
//                                 Log Out
//                             </ResponsiveNavLink>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {header && (
//                 <header className="bg-white shadow">
//                     <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
//                         {header}
//                     </div>
//                 </header>
//             )}

//             <main>{children}</main>
//         </div>
//     );
// }
