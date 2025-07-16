import { Github, Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';

const TikTokIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 transition-colors hover:text-primary"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.32-4.2-1.9-6.6.43-2.4 1.91-4.41 3.82-5.77 1.91-1.35 4.24-2.01 6.6-1.92l.01 4.74c-1.02.01-2.02-.38-2.71-1.15-1.02-1.12-1.2-2.84-.52-4.25.46-.96 1.42-1.63 2.47-1.74l.01-4.74c-.22-1.4-.01-2.79.33-4.18 2.61-1.93 4.8-4.38 5.16-4.38z" />
    </svg>
  );

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/shankavisal' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/shankavisal' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/shankavisal' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/shankavisal' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/shankavisal' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/shankavisal' },
    { name: 'TikTok', icon: TikTokIcon, href: 'https://tiktok.com/@shankavisal' },
  ];

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Shanka Visal. © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {socialLinks.map(({ name, icon: Icon, href }) => (
            <Link key={name} href={href} target="_blank" rel="noopener noreferrer">
              <Icon />
              <span className="sr-only">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
