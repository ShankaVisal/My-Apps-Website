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
    <div>
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <header>
              <h1 className="text-5xl lg:text-6xl font-bold font-headline mb-4 text-primary">{app.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{app.shortDescription}</p>
            </header>
             <Image
              src={app.featureImage}
              alt={app.name}
              width={1000}
              height={1000}
              className="w-full h-auto object-contain rounded-lg shadow-xl mb-8"
              data-ai-hint="app mobile"
            />
            <div className="mb-8">
                <h3 className="text-xl font-bold font-headline mb-3">Technology Stack</h3>
                <TechStackBadges tags={app.techStack} />
            </div>
            <DownloadButtons androidUrl={app.downloadLinks.android} iosUrl={app.downloadLinks.ios} />
          </div>

          <div>
             <div className="prose dark:prose-invert max-w-none lg:prose-lg">
                <h2 className="text-3xl font-bold font-headline">About The App</h2>
                <p>{app.longDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
         <AppGallery images={app.gallery} appName={app.name} />
      </div>
      <CallToActionBanner />
    </div>
  );
}
