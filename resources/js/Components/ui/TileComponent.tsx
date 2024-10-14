import { cn } from '@/lib/utils'


interface TileComponentProps {
    title?: string
    className?: string
    classNameTitle?: string
    classNameContent?: string
    children?: React.ReactNode
}

const TileComponent = ({ title, className, classNameTitle, children, classNameContent }: TileComponentProps) => {

    return (
        <div className={cn('flex flex-col justify-center items-center hover:bg-background rounded-lg p-4 bg-background-secondary/20 min-h-[25vh] border transition-all delay-100 duration-200 border-border gap-2 w-full h-full', className)}>

            <h2
                className={cn(
                    'font-semibold text-foreground text-xl',
                    classNameTitle
                )}>
                {title}
            </h2>
            <div className={cn('nothing', classNameContent)}>
                {children}
            </div>

        </div>
    )
}

export default TileComponent