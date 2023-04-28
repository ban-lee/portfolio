import React from 'react';

export interface Project {
  id: string;
  name: string;
  path?: string;
  url?: string;
}

export interface Course {
  id: string;
  name: string;
  description: React.ReactElement;
  inProgress?: boolean;

  projects: Project[];
}
