'use client';

import React from 'react';
import HeroText from '@/components/HeroText';
import NavGrid from '@/components/NavGrid';
import SocialLinks from '@/components/Contact';
import Projects from '@/components/Projects';
import { motion } from 'framer-motion';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50 pointer-events-none fixed" />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center w-full px-4 pt-32 pb-16 z-10 min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-8 max-w-4xl text-center"
        >
          <HeroText />
          <NavGrid />
          <SocialLinks />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-7xl px-4 pb-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Projects />
        </motion.div>
      </section>

      <ChatWidget />

      {/* Footer */}
      <footer className="py-8 w-full text-center text-muted-foreground text-sm border-t border-border/40 z-10 bg-background/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Elijah Silverman</p>
      </footer>
    </main>
  );
}
