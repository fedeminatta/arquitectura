import styles from './Proyects.module.scss';

interface Props {
  title: string;
  description: string;
  img: any;
  index: number;
}

const Proyects = ({ title, description, img, index }: Props) => {
  return (
    <div
      className={styles.card}
      data-aos="fade-up"
      data-aos-duration={700}
      data-aos-delay={index * 200 + 400}
    >
      <a href={`/proyecto/${title}`}>
        <article style={{ backgroundImage: `url(${img.src})` }}>
          <div className={styles.text}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </article>
      </a>
    </div>
  );
};
export default Proyects;
