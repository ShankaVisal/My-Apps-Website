'use client';

import Image from 'next/image';
import type { App } from '@/lib/types';
import { DownloadButtons } from '@/components/DownloadButtons';
import { TechStackBadges } from '@/components/TechStackBadges';
import { AppGallery } from '@/components/AppGallery';
import { motion } from 'framer-motion';

type TemplateProps = {
  app: App;
};

const PhoneMockup: React.FC<{imgSrc: string, alt: string}> = ({ imgSrc, alt }) => (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-black">
            <Image src={imgSrc} className="w-full h-full object-cover" alt={alt} width={300} height={600} data-ai-hint="app mobile" />
        </div>
    </div>
);


export default function Template6({ app }: TemplateProps) {
  return (
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
        
        <div className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                     <h2 className="text-4xl font-bold font-headline mb-4 text-center">Features & Technology</h2>
                     <p className="text-lg text-muted-foreground leading-relaxed text-center mb-10">{app.longDescription}</p>
                     <div className="text-center">
                        <TechStackBadges tags={app.techStack} />
                     </div>
                </div>

                <AppGallery images={app.gallery} appName={app.name} />
            </div>
        </div>
    </div>
  );
}
