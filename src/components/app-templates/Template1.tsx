import Image from 'next/image';
import type { App } from '@/lib/types';
import { DownloadButtons } from '@/components/DownloadButtons';
import { TechStackBadges } from '@/components/TechStackBadges';
import { AppGallery } from '@/components/AppGallery';
import { CallToActionBanner } from '@/components/CallToActionBanner';

type TemplateProps = {
  app: App;
};

export default function Template1({ app }: TemplateProps) {
  return (
    <>
      <div className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-8">
              <h1 className="text-5xl font-bold font-headline mb-2 text-primary">{app.name}</h1>
              <p className="text-xl text-muted-foreground">{app.shortDescription}</p>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-12">
              <Image
                src={app.featureImage}
                alt={app.name}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                data-ai-hint="app screenshot"
              />
            </div>

            <div className="prose dark:prose-invert max-w-none mx-auto mb-12">
                <h2 className="text-3xl font-bold font-headline">About the App</h2>
                <p className="text-foreground/80 leading-relaxed">{app.longDescription}</p>
            </div>
            
            <div className="mb-12">
                <h3 className="text-2xl font-bold font-headline mb-4">Tech Stack</h3>
                <TechStackBadges tags={app.techStack} />
            </div>

            <DownloadButtons androidUrl={app.downloadLinks.android} iosUrl={app.downloadLinks.ios} />
            
            <AppGallery images={app.gallery} appName={app.name} />
          </div>
        </div>
      </div>
      <CallToActionBanner />
    </>
  );
}
