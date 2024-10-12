
// DockViewNavbar.tsx
import WTLogoOfficial from '@/Components/icons/logo-official-stroked';
import { cn } from '@/lib/utils';
import type { User } from '@/types';
import { Link } from '@inertiajs/react';
import { ThemeColorToggle } from '../theme/theme-color-toggle';
import { ThemeModeToggle } from '../theme/theme-mode-toggle';

interface NavbarProps {
    auth: {
        user: User;
    }
    className?: string
}

export default function Navbar({ auth, className }: NavbarProps) {


    return (
        <div className={cn("z-50 flex justify-between items-center space-x-2 bg-background/80 backdrop-blur p-2 w-full h-full tabs-header", className)}>
            <Link href="/" className='flex flex-col justify-center items-center border-input bg-background hover:bg-background-secondary p-[.45rem] border rounded-sm w-10 h-full text-accent-foreground hover:text-primary transition-all'>
                <WTLogoOfficial width={25} height={25} strokewidth={30} />
            </Link>

            {/* <Button
                value="new-tab"
                variant={"default"}
                className='m-0 ml-2 py-0 pr-4 pl-3 h-10'>
                <Plus width={20} height={20} className='mr-2' /> New Tab
            </Button> */}
            <nav className="flex flex-1 justify-end -mx-3">
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="px-3 py-2 rounded-md ring-1 ring-transparent focus-visible:ring-[#FF2D20] dark:focus-visible:ring-white text-black hover:text-black/70 dark:hover:text-white/80 dark:text-white transition focus:outline-none"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="px-3 py-2 rounded-md ring-1 ring-transparent focus-visible:ring-[#FF2D20] dark:focus-visible:ring-white text-black hover:text-black/70 dark:hover:text-white/80 dark:text-white transition focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route('register')}
                            className="px-3 py-2 rounded-md ring-1 ring-transparent focus-visible:ring-[#FF2D20] dark:focus-visible:ring-white text-black hover:text-black/70 dark:hover:text-white/80 dark:text-white transition focus:outline-none"
                        >
                            Register
                        </Link>
                    </>
                )}
            </nav>
            <ThemeColorToggle />
            <ThemeModeToggle />
        </div>
    );
}
