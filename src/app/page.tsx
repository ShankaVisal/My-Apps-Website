'use client';

import { getApps } from '@/lib/apps';
import AppCard from '@/components/AppCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RecentApp } from '@/components/RecentApp';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { OfficialWebsiteBanner } from '@/components/OfficialWebsiteBanner';

export default function Home() {
  const apps = getApps();
  const recentApp = apps[0];
  const otherApps = apps.slice(1);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div className="bg-background overflow-hidden">
      <motion.section
        className="h-screen flex flex-col items-center justify-center text-center p-4 relative"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tighter mb-6 text-primary"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {'My Apps'.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap mr-4">
              {word.split('').map((char, index) => (
                <motion.span key={char + '-' + index} variants={letter} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          A passionate mobile app developer creating innovative and user-centric applications for Android and iOS. Explore my work below.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button asChild size="lg" className="px-10 py-6 text-lg">
            <Link href="#apps">Explore Apps</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-10 py-6 text-lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </motion.section>

      {recentApp && <RecentApp app={recentApp} />}

      <OfficialWebsiteBanner />

      <motion.section 
        id="apps" 
        className="relative z-10 py-20 bg-muted/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 font-headline"
            variants={item}
          >
            All Mobile Applications
          </motion.h2>
          <motion.div 
            className="flex flex-col items-center gap-16 md:gap-20"
            variants={container}
          >
            {otherApps.map((app, index) => (
              <AppCard key={app.slug} app={app} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      <CallToActionBanner />
    </div>
  );
}
