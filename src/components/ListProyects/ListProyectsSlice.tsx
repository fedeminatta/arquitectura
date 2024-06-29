import React from 'react';
import proyectosArray from '../../utils/proyectos';
import Proyects from '@components/Proyects/Proyects';

import styles from './ListProyects.module.scss';

const ListProyectsSlice = () => {
  return (
    <section className={styles.proyectos}>
      {proyectosArray.slice(0, 2).map((item, index) => (
        <Proyects
          key={item.titulo}
          title={item.titulo}
          description={item.description}
          img={item.img}
          index={index}
        />
      ))}
    </section>
  );
};
export default ListProyectsSlice;
