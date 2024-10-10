
// DockViewNavbar.tsx
import { Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import LogoOfficial from '../../icons/logo-official';
import { ThemeColorToggle } from '../../theme/theme-color-toggle';
import { ThemeModeToggle } from '../../theme/theme-mode-toggle';
import { Button } from '../../ui/button';
interface DockViewNavbarProps {
    onAddTab: () => void;
}

export default function DockViewNavbar({ onAddTab }: DockViewNavbarProps) {
    return (
        <div className="z-50 flex justify-between items-center space-x-2 bg-background/80 backdrop-blur p-2 w-full h-full tabs-header">
            <Link href="/" className='flex flex-col justify-center items-center border-input bg-background hover:bg-background-secondary p-[.45rem] border rounded-sm w-10 h-full text-accent-foreground hover:text-primary transition-all'>
                <LogoOfficial />
            </Link>

            <Button
                value="new-tab"
                onClick={onAddTab}
                variant={"default"}
                className='m-0 ml-2 py-0 pr-4 pl-3 h-10'>
                <Plus width={20} height={20} className='mr-2' /> New Tab
            </Button>

            <ThemeColorToggle />
            <ThemeModeToggle />
        </div>
    );
}
