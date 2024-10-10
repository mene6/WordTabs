


interface SubFooterProps {
    laravelVersion: string
    phpVersion: string
    WordTabs: string
}

const SubFooter = ({ laravelVersion, phpVersion, WordTabs }: SubFooterProps) => (
    <footer className="py-4 text-black text-center text-foreground text-sm">
        WordTabs v{WordTabs} React powered CMS with Laravel v{laravelVersion} (PHP v{phpVersion})
    </footer>

)
export default SubFooter