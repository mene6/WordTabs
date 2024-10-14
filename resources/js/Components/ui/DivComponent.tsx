import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// import divVariants from './DivVariants';
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

const divVariants = cva(
    "flex flex-row justify-center items-center",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground",
                destructive: "bg-destructive text-destructive-foreground",
                outline: "border border-input bg-background",
                secondary: "bg-secondary text-secondary-foreground",
                ghost: "",
                link: "text-primary underline-offset-4 hover:underline",
                icon: "bg-background border border-border flex flex-col text-primary h-full w-full",
                iconWithHover: "hover:bg-background bg-secondary/20 transition-all border border-border flex flex-col text-primary h-full w-full",

            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);