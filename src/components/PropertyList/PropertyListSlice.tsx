import React from 'react';
import propertiesArray from '../../utils/properties';
import PropertyCard from '@components/PropertyCard/PropertyCard';

import styles from './PropertyList.module.scss';

const PropertyListSlice = () => {
  return (
    <section className={styles.proyectos}>
      {propertiesArray.slice(0, 2).map((item, index) => (
        <PropertyCard
          key={item.propertyName}
          propertyName={item.propertyName}
          propertyDescription={item.propertyDescription}
          img={item.img}
          index={index}
        />
      ))}
    </section>
  );
};
export default PropertyListSlice;