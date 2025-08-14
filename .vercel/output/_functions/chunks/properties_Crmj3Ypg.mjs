import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, d as addAttribute, l as renderScript, r as renderComponent, n as renderHead, o as renderSlot } from './astro/server_BN8jMKBt.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-4 z-50 w-[97%] mx-auto bg-white p-4 md:p-5 flex flex-wrap items-center justify-between shadow-lg rounded-xl" data-astro-cid-hbpejprx> <div class="text-2xl md:text-3xl font-extrabold text-pink-600" data-astro-cid-hbpejprx>
Inmobiliaria <span class="text-gray-800" data-astro-cid-hbpejprx>XYZ</span> </div> <div class="flex flex-wrap gap-4 md:gap-6 mt-3 md:mt-0" data-astro-cid-hbpejprx> <a href="/" class="text-gray-800 hover:text-pink-600 font-semibold transition-colors text-lg" data-astro-cid-hbpejprx>Inicio</a> <a href="/properties" class="text-gray-800 hover:text-pink-600 font-semibold transition-colors text-lg" data-astro-cid-hbpejprx>Propiedades</a> </div> </nav> `;
}, "C:/Users/Fede/dyad-apps/arquitectura/src/components/Header/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Fede/dyad-apps/arquitectura/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Fede/dyad-apps/arquitectura/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Inmobiliaria Demo"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}<meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])}  ${renderScript($$result, "C:/Users/Fede/dyad-apps/arquitectura/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/Fede/dyad-apps/arquitectura/src/layouts/Layout.astro", void 0);

const img1 = new Proxy({"src":"/_astro/img1.D8dK8_eP.webp","width":1400,"height":933,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Fede/dyad-apps/arquitectura/src/img/img1.webp";
							}
							
							return target[name];
						}
					});

const img2 = new Proxy({"src":"/_astro/img2.CCSWwzeO.webp","width":1293,"height":862,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Fede/dyad-apps/arquitectura/src/img/img2.webp";
							}
							
							return target[name];
						}
					});

const img3 = new Proxy({"src":"/_astro/img3.DSGOLkpy.webp","width":1295,"height":866,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Fede/dyad-apps/arquitectura/src/img/img3.webp";
							}
							
							return target[name];
						}
					});

const img4 = new Proxy({"src":"/_astro/img4.DXgoqwHB.webp","width":1300,"height":867,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Fede/dyad-apps/arquitectura/src/img/img4.webp";
							}
							
							return target[name];
						}
					});

const img5 = new Proxy({"src":"/_astro/img5.Zljap3Db.webp","width":1296,"height":864,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Fede/dyad-apps/arquitectura/src/img/img5.webp";
							}
							
							return target[name];
						}
					});

const img6 = new Proxy({"src":"/_astro/img6.Dw1Lm0UO.webp","width":1300,"height":867,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Fede/dyad-apps/arquitectura/src/img/img6.webp";
							}
							
							return target[name];
						}
					});

const propertiesArray = [
  {
    propertyName: "Casa Moderna en Suburbio",
    propertyDescription: `Descubre esta impresionante casa moderna ubicada en un tranquilo suburbio, ideal para familias. Cuenta con 4 habitaciones amplias, 3 baños completos, una cocina gourmet con electrodomésticos de acero inoxidable y un espacioso jardín con piscina. El diseño de concepto abierto maximiza la luz natural y ofrece un flujo perfecto entre las áreas de estar. Perfecta para el entretenimiento y la vida familiar.`,
    img: img1,
    imgW: img1.width,
    imgH: img1.height
  },
  {
    propertyName: "Apartamento de Lujo en Centro",
    propertyDescription: `Experimenta la vida urbana en este lujoso apartamento en el corazón de la ciudad. Con 2 habitaciones, 2.5 baños, vistas panorámicas de la ciudad y acabados de alta gama. El edificio ofrece comodidades exclusivas como gimnasio, seguridad 24/7 y acceso directo a los mejores restaurantes y tiendas. Ideal para profesionales o parejas que buscan comodidad y estilo.`,
    img: img2,
    imgW: img2.width,
    imgH: img2.height
  },
  {
    propertyName: "Villa con Vista al Mar",
    propertyDescription: `Escápate a esta espectacular villa con impresionantes vistas al mar. Disfruta de 5 habitaciones, 4 baños, una piscina infinita y acceso privado a la playa. La propiedad está diseñada para ofrecer la máxima privacidad y lujo, con amplias terrazas y áreas al aire libre perfectas para relajarse y disfrutar del paisaje. Un verdadero paraíso costero.`,
    img: img3,
    imgW: img3.width,
    imgH: img3.height
  },
  {
    propertyName: "Loft Urbano con Estilo",
    propertyDescription: `Este loft de diseño industrial ofrece un espacio único y vibrante en el distrito artístico de la ciudad. Con techos altos, grandes ventanales, 1 habitación y 1.5 baños, es perfecto para aquellos que buscan un estilo de vida moderno y dinámico. Cerca de galerías de arte, cafeterías y transporte público.`,
    img: img4,
    imgW: img4.width,
    imgH: img4.height
  },
  {
    propertyName: "Casa Familiar en Zona Residencial",
    propertyDescription: `Amplia casa familiar ubicada en una tranquila zona residencial, ideal para crecer. Cuenta con 3 habitaciones, 2 baños, un gran patio trasero y un garaje doble. La propiedad está cerca de escuelas, parques y centros comerciales, ofreciendo una excelente calidad de vida para toda la familia.`,
    img: img5,
    imgW: img5.width,
    imgH: img5.height
  },
  {
    propertyName: "Finca Rústica con Terreno Extenso",
    propertyDescription: `Descubre esta encantadora finca rústica con un extenso terreno, perfecta para amantes de la naturaleza o para desarrollar proyectos agrícolas. La casa principal cuenta con 3 habitaciones, 2 baños, y hay varias construcciones adicionales. Disfruta de la tranquilidad del campo con fácil acceso a la ciudad.`,
    img: img6,
    imgW: img6.width,
    imgH: img6.height
  }
];

export { $$Layout as $, img2 as a, img3 as b, img1 as i, propertiesArray as p };
