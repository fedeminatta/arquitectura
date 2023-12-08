import React from 'react';
import proyectosArray from '../utils/proyectos';
import Proyects from './Proyects';
import { Slide } from 'react-awesome-reveal';
import './ListProyects.scss';

interface ListProyectsProps {
  slice?: boolean;
}

function ListProyects({ slice }: ListProyectsProps) {
  if (slice) {
    return (
      <section className="proyectos">
        {proyectosArray.slice(0, 2).map((item) => (
          <Proyects
            key={item.titulo}
            title={item.titulo}
            description={item.description}
            img={item.img}
          />
        ))}
      </section>
    );
  } else {
    return (
      <section className="proyectos">
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
