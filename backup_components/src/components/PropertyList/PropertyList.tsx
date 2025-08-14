import React from 'react';
import propertiesArray from '@utils/properties';
import PropertyCard from '@components/PropertyCard/PropertyCard';
import styles from './PropertyList.module.scss';
import PropertyListSlice from './PropertyListSlice';

interface PropertyListProps {
  slice?: boolean;
}

function PropertyList({ slice }: PropertyListProps) {
  if (slice) {
    return <PropertyListSlice />;
  } else {
    return (
      <section className={styles.proyectos}>
        {propertiesArray.map((item, index) => (
          <PropertyCard
            key={Math.random()}
            propertyName={item.propertyName}
            propertyDescription={item.propertyDescription}
            img={item.img}
            index={index}
          />
        ))}
      </section>
    );
  }
}
export default PropertyList;