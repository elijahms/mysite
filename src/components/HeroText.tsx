'use client';

import React from 'react';

const HeroText = () => {
  return (
    <div className="text-center space-y-4 py-4">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent pb-4 leading-tight">
        Elijah Silverman
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
        Full Stack Developer & Passionate Technologist
      </p>
    </div>
  );
};

export default HeroText;