import decoImg from '@/assets/fake-blog/deco.jpg';
import foodImg from '@/assets/fake-blog/food.jpg';
import lifeImg from '@/assets/fake-blog/life.jpg';
import workImg from '@/assets/fake-blog/work.jpg';
import { nanoid } from 'nanoid';
import { Post } from './types';

export const POSTS: Post[] = [
  {
    id: nanoid(),
    title: 'Simple decorations',
    date: new Date('July 23, 2019'),
    numComments: 3,
    summary: `A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard
      and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to
      and make things pop like never before.`,
      imgSrc: decoImg,
      imgAlt: 'A close up of a leafy desk plant. The vase is clear.',
      imgPosition: 'left',
  },
  {
    id: nanoid(),
    title: 'Keeping cooking simple',
    date: new Date('July 19, 2019'),
    numComments: 8,
    summary: `Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One
      of the easiest ways to do that is to keep your cooking nice and simple.`,
      imgSrc: foodImg,
      imgAlt: 'A close-up of some dumplings on a wooden plate and a pair of chopsticks.',
  },
  {
    id: nanoid(),
    title: 'Simplicity and work',
    date: new Date('July 12, 2019'),
    numComments: 4,
    summary: `Work is often a major source of stress. People get frustrated, it ruins their relationship with others and
      it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out.`,
      imgSrc: workImg,
      imgAlt: 'A white desk and chair. There are a a few items on the desk but otherwise the space is empty.',
  },
  {
    id: nanoid(),
    title: 'Finding simplicity in life',
    date: new Date('July 3, 2019'),
    numComments: 5,
    summary: (
      <p>
        <strong>Life can get complicated really quickly</strong>, but it doesn't have to be! There are many ways to
        simplify your life, <a href="#">a few of which we've explored in the past</a>. This week we're taking a bit of a
        approach though, in how you can find simplicity in the life you already living.
      </p>
    ),
    imgSrc: lifeImg,
    imgAlt: 'A plain white desk with few items on it. A simple wooden clock on the wall.',
  },
];
