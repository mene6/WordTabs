import ThemeDataProvider from '@/context/theme-data-provider';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import './bootstrap';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <NextThemesProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <ThemeDataProvider>

                    <App {...props} />

                </ThemeDataProvider>
            </NextThemesProvider>
        );
    },
    progress: {
        color: 'hsl(var(--primary))',
    },
});
