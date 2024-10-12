import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

import divVariants from './DivVariants';
export interface DivComponentProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof divVariants> {
    asChild?: boolean;
    children: React.ReactNode;
}

const DivComponent = React.forwardRef<HTMLDivElement, DivComponentProps>(
    ({ className, variant, size, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : 'div';
        return (
            <Comp
                className={cn(divVariants({ variant, size, className }), 'flex')}
                ref={ref}
                {...props}
            >
                {children}
            </Comp>
        );
    }
);

DivComponent.displayName = 'DivComponent';

export { DivComponent };

