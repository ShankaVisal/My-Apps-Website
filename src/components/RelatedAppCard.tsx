import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { App } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

type AppCardProps = {
  app: App;
};

export default function RelatedAppCard({ app }: AppCardProps) {
  return (
    <div className="w-full">
      <Link href={`/apps/${app.slug}`} className="block group">
        <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-2xl bg-card/80 backdrop-blur-sm border h-full">
          <div className="flex flex-col h-full">
            <div className="aspect-video overflow-hidden">
                <Image
                  src={app.featureImage}
                  alt={app.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  data-ai-hint="app screenshot"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline text-xl mb-2">{app.name}</CardTitle>
                <CardDescription className="text-sm">{app.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.categories.slice(0, 2).map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">{category}</Badge>
                    ))}
                  </div>
                <div className="flex items-center text-sm font-semibold text-primary group-hover:underline">
                  View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
}
