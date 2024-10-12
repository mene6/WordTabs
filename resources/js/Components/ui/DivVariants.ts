// src/Components/ui/divVariants.ts
import { cva } from 'class-variance-authority';

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

export default divVariants;
