'use client';

import Image from 'next/image';
import type { App } from '@/lib/types';
import { DownloadButtons } from '@/components/DownloadButtons';
import { TechStackBadges } from '@/components/TechStackBadges';
import { AppGallery } from '@/components/AppGallery';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { AITemplateSuggester } from '../AITemplateSuggester';

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
    <>
      <div className="py-20 bg-muted/30">
          <header className="container mx-auto px-4 text-center mb-12">
              <h1 className="text-5xl font-bold font-headline mb-2">{app.name}</h1>
              <p className="text-xl text-muted-foreground">{app.shortDescription}</p>
          </header>

          <div className="container mx-auto px-4">
              <MotionCard 
                className="w-full mb-8"
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
                      className="rounded-lg object-cover"
                      data-ai-hint="app screenshot"
                  />
                </CardContent>
              </MotionCard>
              
              <MotionCard 
                className="w-full flex flex-col justify-center mb-8"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <CardContent className="p-6">
                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="font-headline text-2xl">About The App</h2>
                        <p className="text-muted-foreground">{app.longDescription}</p>
                    </div>
                </CardContent>
              </MotionCard>

              <MotionCard 
                className="w-full flex flex-col justify-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <CardContent className="p-6">
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
               <AITemplateSuggester app={app} />
            </motion.div>
          </div>
      </div>
      <CallToActionBanner />
    </>
  );
}
