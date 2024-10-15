// some improvements for home:
// - need to fill in the right side of screen with a fun svg, or image to showcase the components method in action
// - need to fix grainy texture, currently not visible on this page but it is

import Navbar from '@/Components/global/Navbar';
import SubFooter from '@/Components/global/SubFooter';
import GradientWaves from '@/Components/svg/GradientWaves';
import { DivComponent } from '@/Components/ui/DivComponent';
import TileComponent from '@/Components/ui/TileComponent';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { Heart } from 'lucide-react';
import { FaLaravel, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { TbBrandInertia, TbBrandVite } from "react-icons/tb";

export default function Blog({
    auth,
    laravelVersion,
    phpVersion,
    WordTabs,
    posts
}: PageProps<{ laravelVersion: string; phpVersion: string; WordTabs: string, posts: any }>) {


    console.log(posts);

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

            <Head title="WordTabs - CMS" />

            {/* Page Style Wrapper */}

            <div className='relative flex flex-col bg-[radial-gradient(100%_100%_at_50%_100%,hsla(var(--primary)/30%)_0%,hsla(var(--background-secondary)/30%)_75%)] bg-background-secondary w-full min-h-screen overflow-x-hidden overflow-y-hidden'>

                {/* Navigation */}

                <header className="relative flex mb-[60px]">

                    <Navbar auth={auth} className="top-0 z-50 fixed flex border-b border-border w-[calc(100%-1px)] h-[60px]" />

                </header>

                <main className='space-x-0 grid grid-cols-2 min-h-[calc(100vh-120px)]'>
                    <div className='z-10 flex flex-col justify-center items-center bg-background/80 backdrop-blur-xl rounded-r-3xl overflow-hidden'>

                        <div className="relative flex flex-col justify-center items-start space-y-2 w-full h-full padding-sm">

                            <div className='flex flex-col border-foreground/5 bg-foreground/5 p-2 border rounded-2xl text-balance align-start'>


                                <div className='bg-secondary/20 p-4 border border-border rounded-xl transition-all'>

                                    <h1 className='font-bold text-2xl text-foreground leading-none'>
                                        Welcome to your <span className='text-primary'>new</span> <br /><span className='text-primary'>WordTabs</span> project!
                                    </h1>

                                    <p>WordTabs combines the best of <a href="https://laravel.com" target='_blank'>Laravel</a>, <a href='https://inertiajs.com' target='_blank'>Inertia</a>, and <a href='https://reactjs.org' target='_blank'>React</a> into one install. It provides a fast and easy way to host content, with a beautiful UI built with <a href='https://ui.shadcn.com/' target='_blank'>Shadcn</a> and <a href='https://tailwindcss.com' target='_blank'>Tailwind.</a>
                                    </p>

                                </div>

                                {/* Stack Brand Icon List */}

                                <div className='justify-items-stretch gap-2 grid grid-cols-6 mt-4' >

                                    <DivComponent className='py-8 rounded-2xl h-32'
                                        variant={'iconWithHover'}>

                                        <FaLaravel className='h-full' size={100} />

                                    </DivComponent>

                                    <DivComponent className='py-5 rounded-2xl h-32'
                                        variant={'iconWithHover'}>

                                        <TbBrandInertia className='h-full' size={100} style={{ strokeWidth: .6 }} />

                                    </DivComponent>


                                    <DivComponent className='py-8 rounded-2xl h-32'
                                        variant={'iconWithHover'}>

                                        {/* <FaLaravel className='h-full' size={100} /> */}
                                        <TbBrandVite className='h-full' size={100} style={{ strokeWidth: .8 }} />

                                    </DivComponent>

                                    <DivComponent className='py-8 rounded-2xl h-32'
                                        variant={'iconWithHover'}>

                                        <FaReact className='h-full' size={100} />

                                    </DivComponent>

                                    <DivComponent className='py-9 rounded-2xl h-32'
                                        variant={'iconWithHover'}>

                                        <SiShadcnui className='h-full' size={100} />

                                    </DivComponent>

                                    <DivComponent className='py-8 rounded-2xl h-32'
                                        variant={'iconWithHover'}>

                                        <RiTailwindCssFill className='h-full' size={100} />

                                    </DivComponent>


                                </div>

                            </div>

                            {/* 4 Info Squares */}

                            <div className='gap-2 grid grid-cols-2 grid-rows-2 w-full h-full overflow-x-hidden'>

                                <TileComponent title="Word Tabs" className='rounded rounded-tl-2xl'>
                                    <Heart />
                                    {/* <MonacoEditorBlade /> */}
                                </TileComponent>

                                <TileComponent title="Modern CMS" className='rounded rounded-tr-2xl'>
                                    <Heart />
                                </TileComponent>

                                <TileComponent title="Open Source" className='rounded'>
                                    <Heart />
                                </TileComponent>

                                <TileComponent title="Word Tabs" className='rounded rounded-br-2xl'>
                                    <Heart />
                                </TileComponent>

                            </div>

                        </div>

                    </div>

                    <div className='relative flex w-full h-full'>

                    </div>

                </main>

                {/* Page Styling Objects (Orange strip and Grainy Gradient Background) */}

                <div className='top-1/2 left-1/2 absolute bg-primary rounded-full w-2 h-[50vh] -translate-x-1/2 -translate-y-1/2' />

                <div className='opacity-100 grainy mix-blend-multiply' />

                <GradientWaves className='bottom-0 left-0 z-0 absolute hidden w-full' />

                {/* Page Footer - h-58px on home footer to compensate for borders on nav and footer */}

                <SubFooter
                    className="relative bottom-0 z-[20] flex justify-center items-center bg-background/50 backdrop-blur p-2 border-t border-border w-full h-[58px]"
                    laravelVersion={laravelVersion}
                    phpVersion={phpVersion}
                    WordTabs={WordTabs}
                />

            </div>

        </>
    );
}
