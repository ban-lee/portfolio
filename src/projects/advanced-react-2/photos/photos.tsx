import styles from './photos.module.css';
import { Image } from '../image';
import { Photo } from '../picsome-types';
import { useLoaderData } from 'react-router-dom';

const PHOTOS_GET = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

interface LoaderData {
  photos: Photo[];
}

export async function loader(): Promise<LoaderData> {
  const res = await fetch(PHOTOS_GET);
  const data = await res.json() as Photo[];

  // The original data doesn't include a price, so we'll just hard code one.
  return {photos: data.map((photo, index) => {
    photo.price = 5.99 + (index % 2);
    return photo;
  })};
}

export function Photos() {
  const { photos } = useLoaderData() as LoaderData;

  return (
    <main className={styles.main}>
      {photos.map((p, i) => <Image key={p.id} photo={p} index={i} />)}
    </main>
  );
}
