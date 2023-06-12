import styles from './info.module.css';

interface Props {
  title: string;
  paragraph: React.ReactElement;
  align: "left"|"center";
}

export function Info({ title, paragraph, align }: Props) {
  return (
    <div className={align === 'center' ? styles.center : styles.left}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  );
}
