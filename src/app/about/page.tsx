import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Shanka Visal',
  description: 'Learn more about Shanka Visal, a dedicated mobile application developer with expertise in Android, iOS, React Native, and more. Discover my skills and passion for creating user-centric apps.',
};


export default function AboutPage() {
  const skills = ['Android (Kotlin/Java)', 'iOS (Swift/SwiftUI)', 'React Native', 'Flutter', 'Next.js', 'Firebase', 'UI/UX Design'];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Shanka Visal"
              width={300}
              height={300}
              className="rounded-full object-cover border-4 border-primary shadow-lg"
              data-ai-hint="developer portrait"
            />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">About Me</h1>
            <p className="text-lg text-muted-foreground mb-6">
              I am Shanka Visal, a dedicated and passionate mobile application developer with a keen eye for design and user experience. My journey in software development is driven by a desire to build products that are not only functional and reliable but also beautiful and intuitive to use.
            </p>
            <p className="text-lg text-muted-foreground">
              With years of experience across various platforms and technologies, I specialize in bringing ideas to life, from concept to launch. I thrive on challenges and am constantly learning to stay at the forefront of mobile technology.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-3xl font-headline">My Skillset</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 sm:grid-cols-2 gap-6">
                  {skills.map(skill => (
                    <li key={skill} className="flex items-center text-md">
                      <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-3xl font-headline">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <a href="mailto:shankavisal@gmail.com" className="hover:underline">shankavisal@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <span>(+94) 77 1775 703</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
