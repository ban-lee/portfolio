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
  const data = await res.json();

  return {photos: data};
}

export function Photos() {
  const { photos } = useLoaderData() as LoaderData;

  return (
    <main className={styles.main}>
      {photos.map((p, i) => <Image key={p.id} photo={p} index={i} />)}
    </main>
  );
}
