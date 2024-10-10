import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (

        <button
            {...props}
            className={`bg-primary hover:bg-[hsl(var(--foreground))] shadow-[0_4px_14px_0_hsl(var(--primary))] dark:shadow-[0_4px_14px_0_hsla(var(--primary)/.5)] hover:shadow-[0_6px_20px_-10px_hsla(var(--foreground)/1)] dark:hover:shadow-[0_6px_20px_-10px_hsla(var(--foreground)/.5)] px-4 py-3 rounded-md font-light text-background dark:text-foreground dark:hover:text-background transition duration-200 ease-linear ${disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

// Backup
// <button
//     {...props}
//     className={
//         `font-medium inline-flex items-center rounded-lg border border-foreground bg-foreground px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-primary-background hover:border-transparent focus:border-border focus:bg-highlighted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:bg-foreground ${disabled && 'opacity-25'
//         } ` + className
//     }
//     disabled={disabled}
// >
//     {children}
// </button>