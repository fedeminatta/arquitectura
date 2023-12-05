import img1 from '@img/img1.webp';
import img2 from '@img/img2.webp';
import img3 from '@img/img3.webp';
import img4 from '@img/img4.webp';
import img5 from '@img/img5.webp';
import img6 from '@img/img6.webp';

interface ProyectoObj {
  titulo: string;
  description: string;
  img: ImageMetadata | string;
  imgW: number;
  imgH: number;
}

const proyectosArray: ProyectoObj[] = [
  {
    titulo: 'Proyecto 1',
    description: `En el corazón de la ciudad, surge un proyecto arquitectónico innovador que redefine la interacción entre el entorno urbano y la funcionalidad estética. Este ambicioso proyecto, concebido por un equipo multidisciplinario de arquitectos visionarios, busca fusionar la modernidad con la rica historia cultural del lugar. La premisa fundamental del diseño radica en la creación de un espacio que no solo sea visualmente impactante, sino que también sirva como un punto de convergencia para la comunidad, inspirando la colaboración y el intercambio social.

    El edificio se erige como un símbolo de sostenibilidad y eficiencia energética, incorporando tecnologías vanguardistas para minimizar su huella ambiental. Los espacios interiores han sido meticulosamente planificados para maximizar la funcionalidad y la comodidad, proporcionando áreas flexibles que se adaptan a diversas actividades y necesidades. La utilización de materiales ecoamigables y la integración de elementos naturales no solo refuerzan el compromiso con la ecología, sino que también añaden una conexión armoniosa con el entorno circundante.
    
    La fachada del edificio es un lienzo dinámico que juega con la luz y la sombra, creando una experiencia visual única a lo largo del día. Además, los espacios exteriores han sido concebidos como extensiones fluidas del interior, fomentando la interacción al aire libre y ofreciendo vistas panorámicas que enriquecen la experiencia del usuario. En definitiva, este proyecto de arquitectura no solo redefine la silueta urbana, sino que también establece un nuevo estándar para la integración consciente del entorno, la funcionalidad contemporánea y la estética vanguardista.
    `,
    img: img1,
    imgW: img1.width,
    imgH: img1.height,
  },
  {
    titulo: 'Proyecto 2',
    description: `En el corazón vibrante de la metrópolis, despunta un proyecto arquitectónico que trasciende los límites convencionales, fusionando la modernidad con la esencia de la historia local. Concebido por un equipo de arquitectos innovadores, este proyecto redefine la silueta urbana al tiempo que prioriza la integración armoniosa con el entorno. La visión detrás de este diseño abraza la diversidad de perspectivas y aspira a convertirse en un epicentro de intercambio cultural y social.

    Este audaz emprendimiento no solo destaca por su forma imponente, sino también por su compromiso con la sostenibilidad ambiental. La cuidadosa elección de materiales ecoamigables y la implementación de soluciones tecnológicas avanzadas dan vida a un edificio que no solo cumple su función utilitaria, sino que también sirve como un faro de prácticas responsables. Además, la disposición interior ha sido meticulosamente diseñada para adaptarse a las necesidades cambiantes de la comunidad, creando espacios flexibles que fomentan la colaboración y la creatividad.
    
    La fachada del edificio se erige como una obra de arte dinámica, respondiendo a las variaciones de luz a lo largo del día y aportando una dimensión estética a la experiencia urbana circundante. En suma, este proyecto de arquitectura no solo busca transformar el skyline de la ciudad, sino también nutrir el tejido social mediante una combinación única de innovación, funcionalidad y respeto por el entorno.`,
    img: img2,
    imgW: img2.width,
    imgH: img2.height,
  },
  {
    titulo: 'Proyecto 3',
    description: `En el crisol de la vida urbana, se gesta un proyecto arquitectónico que va más allá de los límites convencionales, fusionando la estética contemporánea con la autenticidad cultural. Este proyecto, concebido por un equipo de arquitectos visionarios, se erige como una declaración audaz de creatividad y funcionalidad. Su esencia radica en la creación de un espacio que no solo es un testimonio de diseño vanguardista, sino también un catalizador para la interacción comunitaria y la expresión individual.

    La innovación sostenible es el núcleo de esta empresa arquitectónica, donde la elección de materiales ecoamigables y soluciones energéticas eficientes se entrelaza con la visión de un futuro más consciente. Los interiores están meticulosamente diseñados para proporcionar un lienzo adaptable, capaz de albergar una diversidad de actividades y experiencias. Este enfoque flexible no solo se traduce en funcionalidad, sino también en una invitación constante a la exploración y la creatividad.
    
    La fachada del edificio, con su diseño único y dinámico, se convierte en una expresión artística que dialoga con el entorno circundante. La interacción de luces y sombras a lo largo del día crea una experiencia visual cambiante que redefine la percepción del espacio. En resumen, este proyecto arquitectónico no solo busca redefinir la ciudad desde un punto de vista estético, sino también fomentar una conexión más profunda entre las personas y su entorno, a través de un equilibrio armonioso entre la forma, la función y la sostenibilidad.`,
    img: img3,
    imgW: img3.width,
    imgH: img3.height,
  },
  {
    titulo: 'Proyecto 4',
    description: `En el corazón de la naturaleza, emerge un proyecto arquitectónico que redefine la armonía entre el entorno natural y la innovación arquitectónica. Este proyecto, concebido por un equipo apasionado de arquitectos, busca fusionar la estética contemporánea con la preservación del ecosistema local. La premisa central del diseño se centra en crear un espacio que honre la biodiversidad mientras ofrece una experiencia única para quienes lo habitan.
  
    El edificio se presenta como un modelo de sostenibilidad, incorporando tecnologías ecoamigables para minimizar su impacto ambiental. Los espacios interiores han sido cuidadosamente diseñados para integrarse con la exuberancia circundante, proporcionando una conexión directa con la naturaleza. La fachada del edificio refleja la paleta cambiante del entorno, convirtiéndose en parte integral del paisaje. Este proyecto arquitectónico no solo redefine la relación entre la construcción y la naturaleza, sino que también establece un estándar para la coexistencia armoniosa entre el hombre y el medio ambiente.`,
    img: img4,
    imgW: img4.width,
    imgH: img4.height,
  },
  {
    titulo: 'Proyecto 5',
    description: `En las alturas de la ciudad, se alza un proyecto arquitectónico vanguardista que desafía las convenciones del skyline urbano. Concebido por un equipo visionario de arquitectos, este proyecto redefine la verticalidad y la elegancia moderna. La visión detrás de este diseño abraza la innovación estructural, al tiempo que prioriza la funcionalidad y el confort para sus ocupantes.
  
    Este emprendimiento destaca por su forma única y su integración con la tecnología inteligente. Los interiores son un testimonio de la atención meticulosa al detalle, ofreciendo un espacio que se adapta a las demandas de la vida urbana contemporánea. La fachada del edificio, con su diseño geométrico y vanguardista, se convierte en un símbolo de progresión arquitectónica. En resumen, este proyecto no solo redefine la silueta de la ciudad, sino que también representa una convergencia de estilos arquitectónicos futuristas y las necesidades cambiantes de la sociedad moderna.`,
    img: img5,
    imgW: img5.width,
    imgH: img5.height,
  },
  {
    titulo: 'Proyecto 6',
    description: `En el epicentro de la creatividad arquitectónica, surge un proyecto visionario que desafía las convenciones y redefine la relación entre el espacio construido y su entorno. Este innovador proyecto, concebido por un equipo de arquitectos apasionados, busca la armonía perfecta entre la funcionalidad pragmática y la expresión estética. La premisa central del diseño radica en crear un ambiente donde la forma sigue a la función, pero sin comprometer la elegancia y la singularidad.

    El edificio se presenta como un testimonio de sostenibilidad y eficiencia, incorporando tecnologías de vanguardia para minimizar su huella ambiental. Los interiores son meticulosamente diseñados para ofrecer un equilibrio entre la versatilidad y la estética, proporcionando espacios que se adaptan de manera fluida a las necesidades cambiantes. La fachada del edificio se convierte en una obra de arte dinámica, respondiendo a la luz del día de manera armoniosa y proporcionando una experiencia visual única.
    
    En resumen, este proyecto arquitectónico no solo redefine el paisaje urbano, sino que también despierta la imaginación y fomenta la interacción con el entorno de una manera que trasciende los límites tradicionales.`,
    img: img6,
    imgW: img6.width,
    imgH: img6.height,
  },
];

export default proyectosArray;
