'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { App } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

type AppCardProps = {
  app: App;
  index: number;
};

export default function AppCard({ app }: AppCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="w-full max-w-4xl"
    >
      <Link href={`/apps/${app.slug}`} className="block group">
        <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-2xl bg-card/80 backdrop-blur-sm border">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-6 md:p-8 order-2 md:order-1">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline text-3xl mb-2">{app.name}</CardTitle>
                <CardDescription className="text-lg">{app.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.categories.slice(0, 3).map((category) => (
                      <Badge key={category} variant="secondary" className="text-sm">{category}</Badge>
                    ))}
                  </div>
                <div className="flex items-center text-md font-semibold text-primary group-hover:underline">
                  View Project <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardContent>
            </div>
            <div className="aspect-square md:aspect-auto md:h-full overflow-hidden order-1 md:order-2">
               <motion.div
                  className="w-full h-full"
                  style={{ y: imageY }}
                >
                <Image
                  src={app.featureImage}
                  alt={app.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  data-ai-hint="app screenshot"
                />
              </motion.div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
