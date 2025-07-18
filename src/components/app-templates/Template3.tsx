import Image from 'next/image';
import type { App } from '@/lib/types';
import { DownloadButtons } from '@/components/DownloadButtons';
import { TechStackBadges } from '@/components/TechStackBadges';
import { AppGallery } from '@/components/AppGallery';
import { CallToActionBanner } from '@/components/CallToActionBanner';

type TemplateProps = {
  app: App;
};

export default function Template3({ app }: TemplateProps) {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-16">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <header className="text-center mb-8">
              <h1 className="text-5xl lg:text-6xl font-bold font-headline mb-4 text-primary">{app.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{app.shortDescription}</p>
            </header>
            
            <Image
              src={app.featureImage}
              alt={app.name}
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg shadow-xl mb-8"
              data-ai-hint="app screenshot"
            />

            <div className="prose dark:prose-invert max-w-none lg:prose-lg mb-8">
              <h2 className="text-3xl font-bold font-headline">About The App</h2>
              <p>{app.longDescription}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold font-headline mb-3">Technology Stack</h3>
              <TechStackBadges tags={app.techStack} />
            </div>

            <div className="flex justify-center">
              <DownloadButtons androidUrl={app.downloadLinks.android} iosUrl={app.downloadLinks.ios} />
            </div>

            <AppGallery images={app.gallery} appName={app.name} />
          </div>
        </div>
      </div>
      <CallToActionBanner />
    </div>
  );
}
