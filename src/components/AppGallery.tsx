import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type AppGalleryProps = {
  images: string[];
  appName: string;
};

export function AppGallery({ images, appName }: AppGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
        <h3 className="text-2xl font-bold font-headline mb-4">Gallery</h3>
        <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
            {images.map((src, index) => (
            <CarouselItem key={index}>
                <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0">
                    <Image
                        src={src}
                        alt={`${appName} gallery image ${index + 1}`}
                        width={1200}
                        height={675}
                        className="rounded-lg object-cover w-full h-full"
                        data-ai-hint="app screenshot"
                    />
                </CardContent>
                </Card>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>
  );
}
