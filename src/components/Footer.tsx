import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/shankavisal' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/shankavisal' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/shankavisal' },
  ];

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Shanka Visal. © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ name, icon: Icon, href }) => (
            <Link key={name} href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="h-6 w-6 transition-colors hover:text-primary" />
              <span className="sr-only">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
