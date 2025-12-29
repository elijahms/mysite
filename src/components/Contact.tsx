'use client';

import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const socialLinks = [
  {
    href: 'https://www.instagram.com/elijahsilverman',
    label: 'Instagram',
    icon: Instagram,
    hoverColor: 'hover:text-[#e1306c]',
  },
  {
    href: 'https://www.linkedin.com/in/elijahsilverman/',
    label: 'LinkedIn',
    icon: Linkedin,
    hoverColor: 'hover:text-[#0077b5]',
  },
  {
    href: 'https://github.com/elijahms',
    label: 'GitHub',
    icon: Github,
    hoverColor: 'hover:text-foreground',
  },
  {
    href: 'https://x.com/elijahsilverman',
    label: 'X',
    icon: XIcon,
    hoverColor: 'hover:text-foreground',
  },
  {
    href: 'mailto:elijahmsilverman@gmail.com',
    label: 'Email',
    icon: Mail,
    hoverColor: 'hover:text-foreground',
  },
];

const SocialLinks = () => (
  <div className="flex flex-row items-center justify-center gap-8 flex-wrap mt-8">
    {socialLinks.map(({ href, label, icon: Icon, hoverColor }) => (
      <Button
        key={label}
        variant="ghost"
        size="icon"
        className={`rounded-full w-12 h-12 transition-all duration-300 hover:scale-110 hover:bg-muted ${hoverColor}`}
        asChild
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon />
        </a>
      </Button>
    ))}
  </div>
);

export default SocialLinks;