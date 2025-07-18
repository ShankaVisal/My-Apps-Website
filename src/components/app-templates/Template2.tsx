import Image from 'next/image';
import type { App } from '@/lib/types';
import { DownloadButtons } from '@/components/DownloadButtons';
import { TechStackBadges } from '@/components/TechStackBadges';
import { AppGallery } from '@/components/AppGallery';
import { CallToActionBanner } from '@/components/CallToActionBanner';

type TemplateProps = {
  app: App;
};

export default function Template2({ app }: TemplateProps) {
  return (
    <>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter mb-4">{app.name}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">{app.shortDescription}</p>
          </header>

          <div className="mb-16">
            <Image
              src={app.featureImage}
              alt={app.name}
              width={1600}
              height={900}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              data-ai-hint="app screenshot"
            />
          </div>
          
          <div className="max-w-4xl mx-auto">
              <section className="mb-12 max-w-none">
                  <h2 className="text-3xl font-bold font-headline border-b-2 border-border pb-2 mb-4">Description</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{app.longDescription}</p>
              </section>

              <section className="mb-12">
                  <h3 className="text-3xl font-bold font-headline mb-4 border-b-2 border-border pb-2">Core Technologies</h3>
                  <TechStackBadges tags={app.techStack} />
              </section>

              <div className="text-center">
                  <DownloadButtons androidUrl={app.downloadLinks.android} iosUrl={app.downloadLinks.ios} />
              </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <AppGallery images={app.gallery} appName={app.name} />
          </div>
        </div>
      </div>
      <CallToActionBanner />
    </>
  );
}
