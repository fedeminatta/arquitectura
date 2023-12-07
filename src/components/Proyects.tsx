import styles from './Proyects.module.scss';

interface Props {
  title: string;
  description: string;
  img: any;
}

const Proyects = ({ title, description, img }: Props) => {
  return (
    <div className={styles.card}>
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
