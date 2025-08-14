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
      className={`${styles.card} motion-preset-slide-up motion-duration-700 motion-delay-300 hover:motion-preset-bounce`}
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