import React from 'react';
import proyectosArray from '../../utils/proyectos';
import Proyects from '../Proyects/Proyects';
import { Slide } from 'react-awesome-reveal';
import styles from './ListProyects.module.scss';
import ListProyectsSlice from './ListProyectsSlice';

interface ListProyectsProps {
  slice?: boolean;
}

function ListProyects({ slice }: ListProyectsProps) {
  if (slice) {
    return <ListProyectsSlice />;
  } else {
    return (
      <section className={styles.proyectos}>
        <Slide direction="up" triggerOnce cascade damping={0} duration={400}>
          {proyectosArray.map((item) => (
            <Proyects
              key={item.titulo}
              title={item.titulo}
              description={item.description}
              img={item.img}
            />
          ))}
        </Slide>
      </section>
    );
  }
}
export default ListProyects;
