import React from 'react';
import proyectosArray from '@utils/proyectos';
import Proyects from '@components/Proyects/Proyects';
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
        {proyectosArray.map((item, index) => (
          <Proyects
            key={Math.random()}
            title={item.titulo}
            description={item.description}
            img={item.img}
            index={index}
          />
        ))}
      </section>
    );
  }
}
export default ListProyects;
