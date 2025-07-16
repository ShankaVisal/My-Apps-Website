import Image from 'next/image';
import type { App } from '@/lib/types';
import { DownloadButtons } from '@/components/DownloadButtons';
import { TechStackBadges } from '@/components/TechStackBadges';
import { AppGallery } from '@/components/AppGallery';

type TemplateProps = {
  app: App;
};

export default function Template3({ app }: TemplateProps) {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row min-h-[70vh] items-center">
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
            <header>
              <h1 className="text-5xl lg:text-6xl font-bold font-headline mb-4 text-primary">{app.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{app.shortDescription}</p>
            </header>
            
            <p className="text-foreground/80 leading-relaxed mb-6">{app.longDescription}</p>

            <div className="mb-8">
                <h3 className="text-xl font-bold font-headline mb-3">Technology Stack</h3>
                <TechStackBadges tags={app.techStack} />
            </div>

            <DownloadButtons androidUrl={app.downloadLinks.android} iosUrl={app.downloadLinks.ios} />
          </div>

          <div className="md:w-1/2 w-full p-4">
            <Image
              src={app.featureImage}
              alt={app.name}
              width={1000}
              height={1000}
              className="w-full h-auto object-contain rounded-lg shadow-xl"
              data-ai-hint="app mobile"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
         <AppGallery images={app.gallery} appName={app.name} />
      </div>
    </div>
  );
}
