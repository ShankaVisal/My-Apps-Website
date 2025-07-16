'use client';

import Image from 'next/image';
import type { App } from '@/lib/types';
import { DownloadButtons } from '@/components/DownloadButtons';
import { TechStackBadges } from '@/components/TechStackBadges';
import { AppGallery } from '@/components/AppGallery';
import { motion } from 'framer-motion';
import { PhoneMockup } from '../PhoneMockup';
import { CallToActionBanner } from '../CallToActionBanner';

type TemplateProps = {
  app: App;
};

export default function Template6({ app }: TemplateProps) {
  return (
    <>
      <div className="bg-background overflow-hidden">
          <div className="relative pt-20 pb-10">
              <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7 }}
                      className="text-center lg:text-left"
                  >
                      <h1 className="text-5xl lg:text-7xl font-extrabold font-headline mb-4 tracking-tight">{app.name}</h1>
                      <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0">{app.shortDescription}</p>
                      <DownloadButtons androidUrl={app.downloadLinks.android} iosUrl={app.downloadLinks.ios} />
                  </motion.div>
                  <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                  >
                      <PhoneMockup imgSrc={app.featureImage} alt={app.name} />
                  </motion.div>
              </div>
          </div>
          
          <div className="py-20 bg-muted/30">
              <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto">
                      <div className="prose dark:prose-invert max-w-none mb-10 text-center">
                        <h2 className="text-4xl font-bold font-headline">Features & Technology</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">{app.longDescription}</p>
                      </div>
                      <div className="text-center mb-12">
                          <TechStackBadges tags={app.techStack} />
                      </div>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <AppGallery images={app.gallery} appName={app.name} />
                  </div>
              </div>
          </div>
      </div>
      <CallToActionBanner />
    </>
  );
}
