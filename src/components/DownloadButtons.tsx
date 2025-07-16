
import Link from 'next/link';
import { ShimmerButton } from '@/components/ui/shimmer-button';

type DownloadButtonsProps = {
  androidUrl: string;
  iosUrl: string;
};

const AppleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 20.94c1.5 0 2.75 1.06 4 0 3-2.34 4.35-6.42 2.5-9.5C17.25 8.44 14.82 8 12 8s-5.25.44-6.5 3.44c-1.85 3.08-.5 7.16 2.5 9.5 1.25 1.06 2.5 0 4 0Z"/>
        <path d="M12 4.46c-1.72 0-3.13 1.4-3 3.16.13 1.76 1.38 3.34 3 3.34 1.62 0 2.87-1.58 3-3.34.13-1.76-1.28-3.16-3-3.16Z"/>
    </svg>
);

const GooglePlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M3.86 2.14a.5.5 0 0 0-.5.5v18.72a.5.5 0 0 0 .5.5h16.28a.5.5 0 0 0 .5-.5V2.64a.5.5 0 0 0-.5-.5H3.86Z" stroke="none" fill="#3DDC84" />
        <path d="m15 12-4-2.5v5L15 12Z" fill="white" stroke="none" />
        <path d="m3.5 2.5 8 8-10 10" />
        <path d="M3.5 21.5 20.5 4"/>
    </svg>
);


export function DownloadButtons({ androidUrl, iosUrl }: DownloadButtonsProps) {
  const isAndroidAvailable = androidUrl && androidUrl !== '#';
  const isIosAvailable = iosUrl && iosUrl !== '#';

  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <Link href={androidUrl} target="_blank" rel="noopener noreferrer" className={!isAndroidAvailable ? 'pointer-events-none' : ''}>
        <ShimmerButton disabled={!isAndroidAvailable}>
          <GooglePlayIcon/>
          Get on Playstore
        </ShimmerButton>
      </Link>
      <Link href={iosUrl} target="_blank" rel="noopener noreferrer" className={!isIosAvailable ? 'pointer-events-none' : ''}>
        <ShimmerButton disabled={!isIosAvailable} className="bg-black">
           <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#555555_50%,#ffffff_100%)]" />
           <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
            <AppleIcon/>
            Get on App Store
          </span>
        </ShimmerButton>
      </Link>
    </div>
  );
}

