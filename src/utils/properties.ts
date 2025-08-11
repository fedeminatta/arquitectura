import img1 from '@img/img1.webp';
import img2 from '@img/img2.webp';
import img3 from '@img/img3.webp';
import img4 from '@img/img4.webp';
import img5 from '@img/img5.webp';
import img6 from '@img/img6.webp';

interface PropertyObj {
  propertyName: string;
  propertyDescription: string;
  img: ImageMetadata | string;
  imgW: number;
  imgH: number;
}

const propertiesArray: PropertyObj[] = [
  {
    propertyName: 'Casa Moderna en Suburbio',
    propertyDescription: `Descubre esta impresionante casa moderna ubicada en un tranquilo suburbio, ideal para familias. Cuenta con 4 habitaciones amplias, 3 baños completos, una cocina gourmet con electrodomésticos de acero inoxidable y un espacioso jardín con piscina. El diseño de concepto abierto maximiza la luz natural y ofrece un flujo perfecto entre las áreas de estar. Perfecta para el entretenimiento y la vida familiar.`,
    img: img1,
    imgW: img1.width,
    imgH: img1.height,
  },
  {
    propertyName: 'Apartamento de Lujo en Centro',
    propertyDescription: `Experimenta la vida urbana en este lujoso apartamento en el corazón de la ciudad. Con 2 habitaciones, 2.5 baños, vistas panorámicas de la ciudad y acabados de alta gama. El edificio ofrece comodidades exclusivas como gimnasio, seguridad 24/7 y acceso directo a los mejores restaurantes y tiendas. Ideal para profesionales o parejas que buscan comodidad y estilo.`,
    img: img2,
    imgW: img2.width,
    imgH: img2.height,
  },
  {
    propertyName: 'Villa con Vista al Mar',
    propertyDescription: `Escápate a esta espectacular villa con impresionantes vistas al mar. Disfruta de 5 habitaciones, 4 baños, una piscina infinita y acceso privado a la playa. La propiedad está diseñada para ofrecer la máxima privacidad y lujo, con amplias terrazas y áreas al aire libre perfectas para relajarse y disfrutar del paisaje. Un verdadero paraíso costero.`,
    img: img3,
    imgW: img3.width,
    imgH: img3.height,
  },
  {
    propertyName: 'Loft Urbano con Estilo',
    propertyDescription: `Este loft de diseño industrial ofrece un espacio único y vibrante en el distrito artístico de la ciudad. Con techos altos, grandes ventanales, 1 habitación y 1.5 baños, es perfecto para aquellos que buscan un estilo de vida moderno y dinámico. Cerca de galerías de arte, cafeterías y transporte público.`,
    img: img4,
    imgW: img4.width,
    imgH: img4.height,
  },
  {
    propertyName: 'Casa Familiar en Zona Residencial',
    propertyDescription: `Amplia casa familiar ubicada en una tranquila zona residencial, ideal para crecer. Cuenta con 3 habitaciones, 2 baños, un gran patio trasero y un garaje doble. La propiedad está cerca de escuelas, parques y centros comerciales, ofreciendo una excelente calidad de vida para toda la familia.`,
    img: img5,
    imgW: img5.width,
    imgH: img5.height,
  },
  {
    propertyName: 'Finca Rústica con Terreno Extenso',
    propertyDescription: `Descubre esta encantadora finca rústica con un extenso terreno, perfecta para amantes de la naturaleza o para desarrollar proyectos agrícolas. La casa principal cuenta con 3 habitaciones, 2 baños, y hay varias construcciones adicionales. Disfruta de la tranquilidad del campo con fácil acceso a la ciudad.`,
    img: img6,
    imgW: img6.width,
    imgH: img6.height,
  },
];

export default propertiesArray;