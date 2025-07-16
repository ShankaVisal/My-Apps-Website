'use client';

import { getApps } from '@/lib/apps';
import AppCard from '@/components/AppCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const apps = getApps();
  const heroRef = useRef(null);

  const { scrollYProgress: scrollYProgressHero } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroTextOpacity = useTransform(scrollYProgressHero, [0, 0.5], [1, 0]);
  const heroTextY = useTransform(scrollYProgressHero, [0, 0.5], ['0%', '-100%']);
  
  const heading = "Shanka Visal";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="bg-background">
      <motion.section 
        ref={heroRef}
        className="h-[100vh] flex flex-col items-center justify-center text-center p-4 sticky top-0"
        style={{ opacity: heroTextOpacity, y: heroTextY }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tight mb-6 text-primary"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {heading.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          A passionate mobile app developer creating innovative and user-centric applications for Android and iOS. Explore my work below.
        </motion.p>
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <Button asChild size="lg" className="px-10 py-6 text-lg">
            <Link href="#apps">Explore Apps</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-10 py-6 text-lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </motion.section>

      <section id="apps" className="relative z-10 py-20 bg-background">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 font-headline">
                My Apps
            </h2>
            <div className="flex flex-col items-center gap-16 md:gap-20">
            {apps.map((app, index) => (
                <AppCard key={app.slug} app={app} index={index} />
            ))}
            </div>
        </div>
      </section>
    </div>
  );
}
