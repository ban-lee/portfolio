import styles from './info.module.css';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  align: "left"|"center";
}

export function Info({ title, align, children }: Props) {
  return (
    <div className={align === 'center' ? styles.center : styles.left}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
