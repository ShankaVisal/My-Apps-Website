'use client';

import { getBannerData } from '@/lib/banner';
import type { Banner } from '@/lib/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function CallToActionBanner() {
  const banner: Banner = getBannerData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  }

  return (
    <motion.section 
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="relative bg-primary/10 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left z-10">
                    <motion.h2 className="text-4xl md:text-5xl font-bold font-headline mb-4" variants={itemVariants}>
                        {banner.title}
                    </motion.h2>
                    <motion.p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0" variants={itemVariants}>
                        {banner.description}
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <Button asChild size="lg" className="px-8 py-6 text-lg">
                            <Link href={banner.buttonLink}>
                                {banner.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
                <motion.div 
                    className="relative flex justify-center items-center h-64 lg:h-auto"
                    variants={imageVariants}
                >
                    <Image
                        src={banner.image}
                        alt="Collaboration illustration"
                        width={600}
                        height={400}
                        className="w-full max-w-lg h-auto object-contain rounded-lg shadow-xl"
                        data-ai-hint="collaboration design"
                    />
                </motion.div>
            </div>
        </div>
      </div>
    </motion.section>
  );
}
