import { cn } from '@/lib/utils'



interface SubFooterProps {
    laravelVersion: string
    phpVersion: string
    WordTabs: string
    className?: string
}

const SubFooter = ({ laravelVersion, phpVersion, WordTabs, className }: SubFooterProps) => (
    <footer className={cn("py-4 text-black text-center text-foreground text-sm", className)}>
        WordTabs v{WordTabs} React powered CMS with Laravel v{laravelVersion} (PHP v{phpVersion})
    </footer>

)
export default SubFooter