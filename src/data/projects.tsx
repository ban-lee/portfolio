import { Course } from '@/types/project';
import { nanoid } from 'nanoid';

export const SCRIMBA: Course[] = [
  {
    id: nanoid(),
    name: 'Learn React',
    description: (
      <p>An introduction to React.</p>
    ),
    githubUrl: 'https://github.com/ban-lee/portfolio/tree/main/src/components/learn-react',
    projects: [
      {
        id: nanoid(),
        name: 'Digital Business Card',
        path: '/learn-react/project-1',
      },
      {
        id: nanoid(),
        name: 'Travel Journal',
        path: '/learn-react/project-2',
      },
      {
        id: nanoid(),
        name: 'Quizzical',
        path: '/learn-react/project-3',
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Learn React Router 6',
    description: (<p>A deep-dive into the router.</p>),
    githubUrl: 'https://github.com/ban-lee/scrimba-vanlife',
    inProgress: true,
    projects: [
      {
        id: nanoid(),
        name: '#VANLIFE',
        url: 'https://scrimba-vanlife-mu.vercel.app/',
      },
    ],
  },
];

export const PERSONAL: Course[] = [
  {
    id: nanoid(),
    name: 'Karlan Tools',
    description: (<p>A website with my Arknights related tools.</p>),
    githubUrl: 'https://github.com/ban-lee/arknights',
    inProgress: true,
    projects: [
      {
        id: nanoid(),
        name: 'Website',
        url: 'https://ak.karlantools.ca/',
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Island Sanctuary Planner',
    description: (<p>A small tool for Final Fantasy XIV's Island Sanctuary mode.</p>),
    githubUrl: 'https://github.com/ban-lee/ffxiv-island-sanctuary',
    projects: [
      {
        id: nanoid(),
        name: 'Website',
        url: 'https://ban-lee.github.io/ffxiv-island-sanctuary/',
      },
    ],
  },
];
