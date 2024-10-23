import { cn } from '@/lib/utils'


interface TileComponentProps {
    title?: string
    className?: string
    classNameTitle?: string
    classNameContent?: string
    iconClassName?: string
    icon?: React.ReactNode
    children?: React.ReactNode
    seperator?: boolean
}

const TileComponent = ({ title, className, classNameTitle, iconClassName, children, icon, classNameContent, seperator = true }: TileComponentProps) => {

    return (
        <div className={cn('flex flex-col justify-center items-start hover:bg-background rounded-lg p-4 bg-background-secondary/20 min-h-[25vh] border transition-all delay-100 duration-200 border-border gap-2 w-full h-full', className)}>
            {icon && (
                <div className="flex flex-row justify-between items-center gap-2 w-full">
                    <h2
                        className={cn(
                            'font-semibold text-foreground text-xl',
                            classNameTitle
                        )}>
                        {title}
                    </h2>
                    <div className={cn('text-primary', iconClassName)}>
                        {icon}
                    </div>
                </div>
            )}

            {seperator && (<div className="bg-border w-full h-px" />)}

            <div className={cn('text-balance tracking-normal leading-7 text-foreground/75', classNameContent)}>
                {children}
            </div>
        </div>
    )
}

export default TileComponent
