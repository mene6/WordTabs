import Navbar from '@/Components/global/Navbar';
import SubFooter from '@/Components/global/SubFooter';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';


export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    WordTabs
}: PageProps<{ laravelVersion: string; phpVersion: string; WordTabs: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />



            <div className='flex flex-col bg-background-secondary w-full h-full overflow-x-hidden'>

                <header className="top-0 z-50 fixed flex border-b border-border w-[calc(100%-1px)]">
                    <Navbar auth={auth} />
                </header>


                <main className="relative flex flex-row flex-grow min-h-[120vh]">
                    <div className='flex flex-grow'>

                    </div>
                </main>

                <SubFooter
                    laravelVersion={laravelVersion}
                    phpVersion={phpVersion}
                    WordTabs={WordTabs}
                />

            </div>

        </>
    );
}
