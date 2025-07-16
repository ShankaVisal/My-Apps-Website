'use client';

import Image from 'next/image';
import type { App } from '@/lib/types';
import { DownloadButtons } from '@/components/DownloadButtons';
import { TechStackBadges } from '@/components/TechStackBadges';
import { AppGallery } from '@/components/AppGallery';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

type TemplateProps = {
  app: App;
};

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const MotionCard = motion(Card);

export default function Template4({ app }: TemplateProps) {
  return (
    <div className="py-20 bg-muted/30">
        <header className="container mx-auto px-4 text-center mb-12">
            <h1 className="text-5xl font-bold font-headline mb-2">{app.name}</h1>
            <p className="text-xl text-muted-foreground">{app.shortDescription}</p>
        </header>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MotionCard 
              className="w-full"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <CardContent className="p-0">
                <Image
                    src={app.featureImage}
                    alt={app.name}
                    width={1200}
                    height={800}
                    className="rounded-t-lg object-cover"
                    data-ai-hint="app screenshot"
                />
              </CardContent>
            </MotionCard>
            
            <MotionCard 
              className="w-full flex flex-col justify-center"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <CardHeader>
                  <CardTitle className="font-headline text-2xl">About The App</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground mb-6">{app.longDescription}</p>
                  <h3 className="text-lg font-bold font-headline mb-3">Core Tech</h3>
                  <TechStackBadges tags={app.techStack} />
                  <DownloadButtons androidUrl={app.downloadLinks.android} iosUrl={app.downloadLinks.ios} />
              </CardContent>
            </MotionCard>
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <AppGallery images={app.gallery} appName={app.name} />
          </motion.div>
        </div>
    </div>
  );
}
