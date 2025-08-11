import styles from './PropertyCard.module.scss';

interface Props {
  propertyName: string;
  propertyDescription: string;
  img: any;
  index: number;
}

const PropertyCard = ({ propertyName, propertyDescription, img, index }: Props) => {
  return (
    <div
      className={styles.card}
      data-aos="fade-up"
      data-aos-duration={700}
      data-aos-delay={index * 200 + 400}
    >
      <a href={`/property/${propertyName}`}>
        <article style={{ backgroundImage: `url(${img.src})` }}>
          <div className={styles.text}>
            <h2>{propertyName}</h2>
            <p>{propertyDescription}</p>
          </div>
        </article>
      </a>
    </div>
  );
};
export default PropertyCard;