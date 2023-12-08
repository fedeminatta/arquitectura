import proyectosArray from '../../utils/proyectos';
import Proyects from '../Proyects/Proyects';
import { Slide } from 'react-awesome-reveal';
import styles from './ListProyects.module.scss';

const ListProyectsSlice = () => {
  return (
    <section className={styles.proyectos}>
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
};
export default ListProyectsSlice;
