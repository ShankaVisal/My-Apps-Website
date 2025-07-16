'use client';

import type { App } from '@/lib/types';
import { motion } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type RecentAppProps = {
  app: App;
};

export function RecentApp({ app }: RecentAppProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section 
      className="py-20 bg-muted/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 font-headline"
          variants={itemVariants}
        >
          Latest Creation
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Check out my most recent project, built with passion and the latest technologies.
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
          >
            <PhoneMockup imgSrc={app.featureImage} alt={app.name} />
          </motion.div>
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
          >
            <motion.h3 className="text-4xl font-bold font-headline mb-3 text-primary" variants={itemVariants}>{app.name}</motion.h3>
            <motion.p className="text-lg text-muted-foreground mb-6" variants={itemVariants}>{app.shortDescription}</motion.p>
            <motion.p className="text-foreground/80 leading-relaxed mb-8" variants={itemVariants}>
                {app.longDescription.substring(0, 200)}...
            </motion.p>
            <motion.div variants={itemVariants}>
                <Button asChild size="lg">
                    <Link href={`/apps/${app.slug}`}>
                        View Project <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
