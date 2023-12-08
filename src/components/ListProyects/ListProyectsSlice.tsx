import React from 'react';
import proyectosArray from '../../utils/proyectos';
import Proyects from '../Proyects/Proyects';
import { Fade } from 'react-awesome-reveal';
import styles from './ListProyects.module.scss';

const ListProyectsSlice = () => {
  return (
    <section className={styles.proyectos}>
      <Fade triggerOnce direction="right" cascade>
        {proyectosArray.slice(0, 2).map((item) => (
          <Proyects
            key={item.titulo}
            title={item.titulo}
            description={item.description}
            img={item.img}
          />
        ))}
      </Fade>
    </section>
  );
};
export default ListProyectsSlice;
