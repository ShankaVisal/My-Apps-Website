import Image from 'next/image';
import type { App } from '@/lib/types';
import { DownloadButtons } from '@/components/DownloadButtons';
import { TechStackBadges } from '@/components/TechStackBadges';
import { AppGallery } from '@/components/AppGallery';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type TemplateProps = {
  app: App;
};

export default function Template5({ app }: TemplateProps) {
  return (
    <>
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="mb-12 text-center shadow-xl">
            <CardHeader>
                <CardTitle className="text-5xl font-bold font-headline text-primary">{app.name}</CardTitle>
                <CardDescription className="text-xl !mt-2">{app.shortDescription}</CardDescription>
            </CardHeader>
          </Card>

          <Card className="mb-12 overflow-hidden shadow-xl">
            <CardContent className="p-0">
                <Image
                    src={app.featureImage}
                    alt={app.name}
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover"
                    data-ai-hint="app screenshot"
                />
            </CardContent>
          </Card>


          <Card className="mb-8 shadow-lg">
            <CardContent className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-bold font-headline">About the App</h2>
                    <p className="text-foreground/80 leading-relaxed">{app.longDescription}</p>
                </div>
            </CardContent>
          </Card>

          <Card className="mb-8 shadow-lg">
            <CardContent className="p-6">
                <h3 className="text-2xl font-bold font-headline mb-4">Tech Stack</h3>
                <TechStackBadges tags={app.techStack} />
            </CardContent>
          </Card>

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
