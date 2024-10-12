import { cn } from '@/lib/utils';

interface GradientWavesProps {
    className?: string;
}

const GradientWaves = ({ className }: GradientWavesProps) => {
    const GradientWaveColor = 'black';
    return (
        <svg version="1.1" id="Layer_1" x="0px" y="0px"
            viewBox="0 0 1920 467" className={cn('w-full mix-blend-overlay opacity-50 ', className)}>

            <defs>
                <linearGradient id="lineargradient1" gradientUnits="userSpaceOnUse" x1="965.7996" y1="452.9952" x2="948.4662" y2="-29.6714">
                    <stop offset=".3" style={{ stopColor: GradientWaveColor, stopOpacity: 0 }} />
                    <stop offset="1" style={{ stopColor: GradientWaveColor }} />
                </linearGradient>

                <linearGradient id="lineargradient2" gradientUnits="userSpaceOnUse" x1="975.0649" y1="448.9337" x2="917.7315" y2="-3.0662">
                    <stop offset=".35" style={{ stopColor: GradientWaveColor, stopOpacity: 0 }} />
                    <stop offset="1" style={{ stopColor: GradientWaveColor }} />
                </linearGradient>

                <linearGradient id="lineargradient3" gradientUnits="userSpaceOnUse" x1="1020.4014" y1="463.9995" x2="971.7211" y2="80.2176">
                    <stop offset=".4" style={{ stopColor: GradientWaveColor, stopOpacity: 0 }} />
                    <stop offset="1" style={{ stopColor: GradientWaveColor }} />
                </linearGradient>
            </defs>

            <path fill="url(#lineargradient1)" d="M1920,467H0c0,0,0-247,0-361.7c43.7,114.7,247.7,357.3,706.3,228S1554.3,26.7,1920,116
		C1920,253.3,1920,467,1920,467z"/>

            <path fill="url(#lineargradient2)" d="M0,467h1920V193.3
		c0,0-327.4-98.4-823,49.3C417,445.3,0,233.3,0,233.3L0,467z"/>

            <path fill="url(#lineargradient3)" d="M1920,63.1c0,154.7,0,403.9,0,403.9H70.3
	c0,0,258.7-270.4,830.2-187C1473,363.6,1414.3,105.3,1920,63.1z"/>
        </svg>
    );
}

export default GradientWaves;
