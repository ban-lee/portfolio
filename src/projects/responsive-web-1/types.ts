export interface Post {
  id: string;
  title: string;
  date: Date;
  numComments: number;
  summary: string|React.ReactElement;
  imgSrc: string;
  imgAlt: string;
  imgPosition?: string;
}
