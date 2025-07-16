
import Link from 'next/link';
import { ShimmerButton } from '@/components/ui/shimmer-button';

type DownloadButtonsProps = {
  androidUrl: string;
  iosUrl: string;
};

export function DownloadButtons({ androidUrl, iosUrl }: DownloadButtonsProps) {
  const isAndroidAvailable = androidUrl && androidUrl !== '#';
  const isIosAvailable = iosUrl && iosUrl !== '#';

  const shimmerProps = {
    shimmerColor: "#ffffff",
    shimmerSize: "0.05em",
    shimmerDuration: "3s",
    borderRadius: "100px",
    background: "rgba(0, 0, 0, 1)",
  };

  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <Link href={androidUrl} target="_blank" rel="noopener noreferrer" className={!isAndroidAvailable ? 'pointer-events-none' : ''}>
        <ShimmerButton {...shimmerProps} disabled={!isAndroidAvailable}>
            Get on Playstore
        </ShimmerButton>
      </Link>
      <Link href={iosUrl} target="_blank" rel="noopener noreferrer" className={!isIosAvailable ? 'pointer-events-none' : ''}>
        <ShimmerButton {...shimmerProps} disabled={!isIosAvailable}>
            Get on App Store
        </ShimmerButton>
      </Link>
    </div>
  );
}
