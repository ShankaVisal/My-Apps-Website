import Image from 'next/image';
import type { App } from '@/lib/types';
import { DownloadButtons } from '@/components/DownloadButtons';
import { TechStackBadges } from '@/components/TechStackBadges';
import { AppGallery } from '@/components/AppGallery';
import { CallToActionBanner } from '@/components/CallToActionBanner';

type TemplateProps = {
  app: App;
};

const NeumorphicCard: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => (
    <div className={`rounded-2xl p-6 bg-background transition-all duration-300 shadow-[8px_8px_16px_#d9d9d9,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#1a1a1a,-8px_-8px_16px_#2e2e2e] ${className}`}>
        {children}
    </div>
);

export default function Template5({ app }: TemplateProps) {
  return (
    <>
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <NeumorphicCard className="mb-12 text-center">
            <h1 className="text-5xl font-bold font-headline mb-2 text-primary">{app.name}</h1>
            <p className="text-xl text-muted-foreground">{app.shortDescription}</p>
          </NeumorphicCard>

          <div className="mb-12 rounded-2xl p-2 bg-background shadow-[inset_8px_8px_16px_#d9d9d9,inset_-8px_-8px_16px_#ffffff] dark:shadow-[inset_8px_8px_16px_#1a1a1a,inset_-8px_-8px_16px_#2e2e2e]">
              <Image
                  src={app.featureImage}
                  alt={app.name}
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover rounded-lg"
                  data-ai-hint="app screenshot"
              />
          </div>

          <NeumorphicCard className="mb-8">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold font-headline">About the App</h2>
                <p className="text-foreground/80 leading-relaxed">{app.longDescription}</p>
              </div>
          </NeumorphicCard>

          <NeumorphicCard className="mb-8">
              <h3 className="text-2xl font-bold font-headline mb-4">Tech Stack</h3>
              <TechStackBadges tags={app.techStack} />
          </NeumorphicCard>

          <div className="mt-12 text-center">
              <DownloadButtons androidUrl={app.downloadLinks.android} iosUrl={app.downloadLinks.ios} />
          </div>
          
          <div className="mt-8">
            <AppGallery images={app.gallery} appName={app.name} />
          </div>
        </div>
      </div>
      <CallToActionBanner />
    </>
  );
}
