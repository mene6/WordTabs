import { cn } from '@/lib/utils';
import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={cn("w-full text-left decoration-transparent font-light", active && 'nothing-yet', className)}
        >
            {children}
        </Link>
    );
}   
