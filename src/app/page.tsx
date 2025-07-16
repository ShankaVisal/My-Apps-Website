'use client';

import { getApps } from '@/lib/apps';
import AppCard from '@/components/AppCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const apps = getApps();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section 
        className="text-center py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4 text-primary"
          variants={itemVariants}
        >
          Shanka Visal
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground mb-8"
          variants={itemVariants}
        >
          A passionate mobile app developer creating innovative and user-centric applications for Android and iOS. Explore my work below.
        </motion.p>
        <motion.div 
          className="flex justify-center gap-4"
          variants={itemVariants}
        >
          <Button asChild size="lg">
            <Link href="#apps">Explore Apps</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </motion.section>

      <section id="apps" className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
          My Apps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <AppCard key={app.slug} app={app} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
