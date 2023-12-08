import styles from './SectionInfo.module.scss';
import { Fade } from 'react-awesome-reveal';

interface Props {
  title: string;
  description: string;
  img: any;
  right?: boolean;
}
const SectionInfo = ({ title, description, img, right }: Props) => {
  return (
    <Fade triggerOnce direction={right ? 'right' : 'left'}>
      <section className={styles.section}>
        <div className={styles.img}>
          <img src={img.src} alt={title} width={350} />
        </div>
        <article
          className={styles.article}
          style={{ order: right ? '-1' : '1' }}
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </article>
      </section>
    </Fade>
  );
};
export default SectionInfo;
