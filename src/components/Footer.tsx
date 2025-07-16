import { Github, Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';

const TikTokIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      className="h-6 w-6 transition-colors hover:text-primary"
    >
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
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
