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
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <Image 
            src={app.featureImage} 
            alt={`${app.name} background`} 
            layout="fill" 
            objectFit="cover" 
            className="blur-2xl scale-110 opacity-30"
            data-ai-hint="abstract background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto p-8 bg-card/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
            <header className="text-center mb-8">
              <h1 className="text-5xl font-bold font-headline mb-2 text-primary">{app.name}</h1>
              <p className="text-xl text-muted-foreground">{app.shortDescription}</p>
            </header>

            <div className="aspect-video rounded-lg overflow-hidden shadow-lg border border-white/10 mb-12">
              <Image
                src={app.featureImage}
                alt={app.name}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                data-ai-hint="app screenshot"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold font-headline mb-4">About the App</h2>
                <p className="text-foreground/80 leading-relaxed">{app.longDescription}</p>
                <DownloadButtons androidUrl={app.downloadLinks.android} iosUrl={app.downloadLinks.ios} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline mb-4">Tech Stack</h3>
                <TechStackBadges tags={app.techStack} />
              </div>
            </div>
            
            <AppGallery images={app.gallery} appName={app.name} />
          </div>
        </div>
      </div>
      <CallToActionBanner />
    </>
  );
}
