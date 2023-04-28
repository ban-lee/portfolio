import { Course } from '@/types/project';
import { nanoid } from 'nanoid';

export const SCRIMBA: Course[] = [
  {
    id: nanoid(),
    name: 'Learn React',
    description: (
      <p>An introduction to React course. The projects only utilizes plain React to focus on the basics.</p>
    ),
    projects: [
      {
        id: nanoid(),
        name: 'Digital Business Card',
        path: '/scrimba/project-1',
      },
      {
        id: nanoid(),
        name: 'Travel Journal',
        path: '/scrimba/project-2',
      },
      {
        id: nanoid(),
        name: 'Quizzical',
        path: '/scrimba/project-3',
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Learn React Router 6',
    description: (<p>A deep-dive into the router.</p>),
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
    projects: [
      {
        id: nanoid(),
        name: 'Website',
        url: 'https://ban-lee.github.io/ffxiv-island-sanctuary/',
      },
    ],
  },
];
