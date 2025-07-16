
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
        <ShimmerButton disabled={!isIosAvailable}>
            Get on App Store
        </ShimmerButton>
      </Link>
    </div>
  );
}
