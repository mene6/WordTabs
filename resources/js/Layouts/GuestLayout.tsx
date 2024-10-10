import WTLogoOfficial from '@/Components/icons/logo-official-stroked';
import { ThemeModeToggle } from '@/Components/theme/theme-mode-toggle';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Heart } from 'lucide-react';
import { PropsWithChildren } from 'react';
interface GuestProps extends PropsWithChildren {
    className?: string;
}
//bg-background-secondary
export default function Guest({ children, className }: GuestProps) {
    return (
        <div className={cn("bg-[radial-gradient(100%_100%_at_50%_100%,hsla(var(--primary)/30%)_0%,hsla(var(--background-secondary)/30%)_75%)] flex flex-col w-full h-full overflow-x-hidden min-h-screen", className)}>


            <ThemeModeToggle className='top-2 right-2 z-20 absolute' />

            <div className='space-x-0 grid grid-cols-2 min-h-screen'>
                <div className='z-10 flex flex-col justify-center items-center bg-background rounded-r-3xl overflow-hidden'>
                    <Link href="/">
                        <WTLogoOfficial strokewidth={35} className="w-[3rem] h-[3rem] text-primary" />
                    </Link>
                    <div className="p-4">
                        {children}
                    </div>
                </div>
                <div className='relative flex w-full h-full'>
                    <div className='top-1/2 left-0 absolute flex flex-row justify-center items-center bg-primary px-4 rounded-t-xl h-[40px] font-semibold text-background -translate-y-1/2 translate-x-[calc(-50%+20px)] select-none rotate-90'>
                        WordTabs <Heart style={{ strokeWidth: 3 }} width={15} height={15} className='inline-block -mb-[2px] ml-2 stroke-current' />
                    </div>
                </div>

            </div>
            <div className='opacity-100 grainy mix-blend-multiply' />

        </div>
    );
}
