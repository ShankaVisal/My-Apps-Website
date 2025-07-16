
import Link from 'next/link';
import { ShimmerButton } from '@/components/ui/shimmer-button';

type DownloadButtonsProps = {
  androidUrl: string;
  iosUrl: string;
};

export function DownloadButtons({ androidUrl, iosUrl }: DownloadButtonsProps) {
  const isAndroidAvailable = androidUrl && androidUrl !== '#';
  const isIosAvailable = iosUrl && iosUrl !== '#';

  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <Link href={androidUrl} target="_blank" rel="noopener noreferrer" className={!isAndroidAvailable ? 'pointer-events-none' : ''}>
        <ShimmerButton disabled={!isAndroidAvailable}>
          Get on Playstore
        </ShimmerButton>
      </Link>
      <Link href={iosUrl} target="_blank" rel="noopener noreferrer" className={!isIosAvailable ? 'pointer-events-none' : ''}>
        <ShimmerButton disabled={!isIosAvailable} className="bg-black">
           <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#555555_50%,#ffffff_100%)]" />
           <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
            Get on App Store
          </span>
        </ShimmerButton>
      </Link>
    </div>
  );
}
