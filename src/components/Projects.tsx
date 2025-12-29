'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      name: 'double-down-trivia\n 🃏 🎲 ❓',
      link: 'https://doubledowntrivia.web.app',
    },
    {
      name: 'treadlite\n 🌳 👣 🌲 ',
      link: 'https://www.loom.com/share/ae32fcb31548443dbf038873b9d6cf8d',
    },
    // {
    //   name: 'snap-note\n 📅 📝 🗃️',
    //   link: 'https://www.loom.com/share/769b5eeaf5464faea42578b015a38423?sharedAppSource=personal_library',
    // },
    {
      name: 'stuck-in-space\n 🚀 👽 👾',
      link: 'https://www.loom.com/share/8db58058dc9a4bc09161d47fb4a2b199',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-foreground">
      <h2 className="text-5xl md:text-6xl text-center mb-16">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group transition-transform duration-300 hover:scale-105"
          >
            <Card className="h-full bg-card border-none shadow-none hover:bg-accent transition-colors duration-300">
              <CardContent className="flex items-center justify-center p-6 min-h-[200px] text-center whitespace-pre-line">
                <span className="text-xl md:text-2xl font-semibold leading-tight group-hover:text-accent-foreground transition-colors duration-300">
                  {project.name}
                </span>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;