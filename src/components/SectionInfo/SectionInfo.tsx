import styles from './SectionInfo.module.scss';
import { Fade } from 'react-awesome-reveal';

interface Props {
  title: string;
  description: string;
  img: any;
  right?: boolean;
  bgColor?: string;
}
const SectionInfo = ({ title, description, img, right, bgColor }: Props) => {
  return (
    <Fade triggerOnce direction={right ? 'right' : 'left'}>
      <section
        className={styles.section}
        id="acerca_de"
        style={{ backgroundColor: bgColor }}
      >
        <div className={styles.img}>
          <img src={img.src} alt={title} width={350} />
        </div>
        <article
          className={styles.article}
          style={{ backgroundColor: 'transparent', order: right ? '-1' : '1' }}
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </article>
      </section>
    </Fade>
  );
};
export default SectionInfo;
