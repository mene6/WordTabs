'use client';

import { cn } from '@/lib/utils';

interface LogoOfficialProps {
	className?: string;
	width?: number;
	height?: number;
	strokewidth?: number;
}

const WTLogoOfficial = ({ className, width = 30, height = 30, strokewidth = 40 }: LogoOfficialProps) => {

	return (
		<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 500 500"
			className={cn('text-current fill-none stroke-current duration-500 transition-all', className)} width={width} height={height}
		>
			<g>
				<line style={{ strokeWidth: strokewidth }} className="stroke-linecap-round stroke-miterlimit-10" x1="143.8" y1="190.1" x2="143.8" y2="448" />
				<path style={{ strokeWidth: strokewidth }} className="stroke-linecap-round stroke-miterlimit-10" d="M250,235v227.7v3.4c0,6.6-5.5,11.8-12.1,11.5C117.8,471.2,22.3,371.8,22.3,250.2c0-38.4,9.5-74.5,26.3-106.2"
				/>
				<path style={{ strokeWidth: strokewidth }} className="stroke-linecap-round stroke-miterlimit-10" d="M356.2,143.9v274.7l0,19.5c0,6.1,6.7,9.8,11.9,6.7c65.7-39.9,109.6-112.2,109.6-194.7" />
				<path style={{ strokeWidth: strokewidth }} className="stroke-linecap-round stroke-miterlimit-10" d="M404.8,83.2c-40.6-37.7-95-60.7-154.8-60.7s-114.2,23-154.8,60.7" />
				<path style={{ strokeWidth: strokewidth }} className="stroke-linecap-round stroke-miterlimit-10" d="M213.6,143.9h224.6h0c6,0,9.7-6.6,6.6-11.7c-11-18.2-24.5-34.6-40-49" />
				<path style={{ strokeWidth: strokewidth }} className="stroke-linecap-round stroke-miterlimit-10" d="M95.2,83.2" />
			</g>
		</svg>


	)
}
export default WTLogoOfficial