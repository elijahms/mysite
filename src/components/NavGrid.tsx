'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const NavGrid = () => {
  return (
    <div className="flex justify-center mt-8">
      <Button
        variant="default"
        size="lg"
        className="text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground font-semibold tracking-wide"
        asChild
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </Button>
    </div>
  );
};

export default NavGrid;