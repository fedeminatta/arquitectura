import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute } from '../chunks/astro/server_Cs1THcPs.mjs';
import 'kleur/colors';
import { $ as $$Layout, i as img1, a as img2, b as img3 } from '../chunks/properties_CZs4fJj0.mjs';
import '../chunks/index_CVC0tT_4.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DgtWP-e6.mjs';
import { P as PropertyList } from '../chunks/PropertyList_znp1YuQl.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { s as styles } from '../chunks/index.95d291e9_DL112LFP.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const headerImg = new Proxy({"src":"/_astro/header.DO6G2N5l.webp","width":2400,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Fede/dyad-apps/arquitectura/src/img/header.webp";
							}
							
							return target[name];
						}
					});

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center text-center"> ${renderComponent($$result, "Image", $$Image, { "src": headerImg, "alt": "Fondo de Inmobiliaria", "class": "absolute inset-0 w-full h-full object-cover object-center filter brightness-75", "widths": [480, 768, 1024, 1440], "sizes": "(max-width: 768px) 100vw, 100vw", "loading": "eager" })} <div class="relative z-10 p-4 md:p-8 text-white" data-aos="fade-up" data-aos-duration="1000"> <h1 class="text-4xl md:text-7xl font-extrabold leading-tight drop-shadow-lg mb-4">
Encuentra Tu Hogar Ideal
</h1> <p class="text-lg md:text-2xl font-medium drop-shadow-md max-w-3xl mx-auto">
Tu búsqueda termina aquí. Descubre propiedades que se ajustan a tus sueños y necesidades.
</p> <a href="/properties" class="mt-8 inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg text-lg">
Ver Propiedades
</a> </div> </section>`;
}, "C:/Users/Fede/dyad-apps/arquitectura/src/components/HeroSection/HeroSection.astro", void 0);

const SectionInfo = ({ title, description, img, right, bgColor }) => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `${styles.section} transition-all duration-700 ease-in-out`,
      id: "acerca_de",
      style: { backgroundColor: bgColor },
      children: [
        /* @__PURE__ */ jsx("div", { className: styles.img, children: /* @__PURE__ */ jsx("img", { src: img.src, alt: title, width: 350 }) }),
        /* @__PURE__ */ jsxs(
          "article",
          {
            className: styles.article,
            style: { backgroundColor: "transparent", order: right ? "-1" : "1" },
            children: [
              /* @__PURE__ */ jsx("h2", { children: title }),
              /* @__PURE__ */ jsx("p", { children: description })
            ]
          }
        )
      ]
    }
  );
};

const personImg1 = new Proxy({"src":"/_astro/descarga.DkSIQiA8.jpeg","width":953,"height":953,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Fede/dyad-apps/arquitectura/src/img/descarga.jpeg";
							}
							
							return target[name];
						}
					});

const personImg2 = new Proxy({"src":"/_astro/descarga2.CCTH3OAh.jpeg","width":936,"height":936,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Fede/dyad-apps/arquitectura/src/img/descarga2.jpeg";
							}
							
							return target[name];
						}
					});

const personImg3 = new Proxy({"src":"/_astro/descarga3.DykY78eQ.jpeg","width":929,"height":929,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Fede/dyad-apps/arquitectura/src/img/descarga3.jpeg";
							}
							
							return target[name];
						}
					});

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="equipo" class="py-12 px-4 bg-white rounded-lg shadow-lg mx-auto max-w-6xl my-8" data-astro-cid-flga5eq7> <h2 class="text-4xl font-extrabold text-center text-gray-800 mb-10" data-astro-cid-flga5eq7>Conoce a Nuestro Equipo</h2> <div class="flex flex-wrap justify-center gap-8" data-astro-cid-flga5eq7> <article class="flex flex-col items-center text-center p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"${addAttribute({ background: "#FBD9DB" }, "style")} data-aos="fade-up"${addAttribute(500, "data-aos-duration")}${addAttribute(400, "data-aos-delay")} data-astro-cid-flga5eq7> <img${addAttribute(personImg1.src, "src")} alt="María, Agente Inmobiliaria" class="w-40 h-40 object-cover rounded-full mb-4 border-4 border-white shadow-md" data-astro-cid-flga5eq7> <h3 class="text-2xl font-bold text-gray-800" data-astro-cid-flga5eq7>María</h3> <span class="text-lg text-gray-600" data-astro-cid-flga5eq7>Agente Inmobiliaria Senior</span> </article> <article class="flex flex-col items-center text-center p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"${addAttribute({ background: "#bce19f" }, "style")} data-aos="fade-up"${addAttribute(500, "data-aos-duration")}${addAttribute(600, "data-aos-delay")} data-astro-cid-flga5eq7> <img${addAttribute(personImg2.src, "src")} alt="Lorenzo, Asesor Legal" class="w-40 h-40 object-cover rounded-full mb-4 border-4 border-white shadow-md" data-astro-cid-flga5eq7> <h3 class="text-2xl font-bold text-gray-800" data-astro-cid-flga5eq7>Lorenzo</h3> <span class="text-lg text-gray-600" data-astro-cid-flga5eq7>Asesor Legal Inmobiliario</span> </article> <article class="flex flex-col items-center text-center p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"${addAttribute({ background: "#ffd088" }, "style")} data-aos="fade-up"${addAttribute(500, "data-aos-duration")}${addAttribute(800, "data-aos-delay")} data-astro-cid-flga5eq7> <img${addAttribute(personImg3.src, "src")} alt="Fernando, Especialista en Marketing" class="w-40 h-40 object-cover rounded-full mb-4 border-4 border-white shadow-md" data-astro-cid-flga5eq7> <h3 class="text-2xl font-bold text-gray-800" data-astro-cid-flga5eq7>Fernando</h3> <span class="text-lg text-gray-600" data-astro-cid-flga5eq7>Especialista en Marketing Digital</span> </article> </div> </section> `;
}, "C:/Users/Fede/dyad-apps/arquitectura/src/components/Nosotros/Nosotros.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="fixed bottom-0 left-0 w-full bg-pink-600 py-3 px-4 flex justify-around items-center shadow-lg z-40 md:hidden" data-astro-cid-ycdwiihb> <a href="#inicio" class="text-white text-sm font-semibold flex flex-col items-center hover:scale-105 transition-transform" data-astro-cid-ycdwiihb> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-ycdwiihb> <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7m7-7v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1h2a1 1 0 001-1m-6 0v-4a1 1 0 011-1h2a1 1 0 011 1v4m-6 0h6" data-astro-cid-ycdwiihb></path> </svg>
Inicio
</a> <a href="#acerca_de" class="text-white text-sm font-semibold flex flex-col items-center hover:scale-105 transition-transform" data-astro-cid-ycdwiihb> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-ycdwiihb> <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-ycdwiihb></path> </svg>
Acerca de
</a> <a href="#equipo" class="text-white text-sm font-semibold flex flex-col items-center hover:scale-105 transition-transform" data-astro-cid-ycdwiihb> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-ycdwiihb> <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h2a2 2 0 002-2V8a2 2 0 00-2-2h-2M14 10h-4m0 0l4-4m-4 4l4 4m3 0v7a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1h4" data-astro-cid-ycdwiihb></path> </svg>
Equipo
</a> <a href="#contacto" class="text-white text-sm font-semibold flex flex-col items-center hover:scale-105 transition-transform" data-astro-cid-ycdwiihb> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-ycdwiihb> <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" data-astro-cid-ycdwiihb></path> </svg>
Contacto
</a> </nav> `;
}, "C:/Users/Fede/dyad-apps/arquitectura/src/components/Footer/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer id="contacto" class="bg-gray-800 text-white py-8 text-center" data-astro-cid-mxalo4ub> <p class="mb-2" data-astro-cid-mxalo4ub>Teléfono: <strong class="text-pink-400" data-astro-cid-mxalo4ub>(123) 456-7890</strong></p> <p class="mb-2" data-astro-cid-mxalo4ub>Correo electrónico: <strong class="text-pink-400" data-astro-cid-mxalo4ub>info@inmobiliariaxyz.com</strong></p> <p data-astro-cid-mxalo4ub>Ubicación: <strong class="text-pink-400" data-astro-cid-mxalo4ub>123 Calle Principal, Ciudad Inmobiliaria</strong></p> </footer> `;
}, "C:/Users/Fede/dyad-apps/arquitectura/src/components/Footer/Footer.astro", void 0);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-pink-600 text-white py-16 px-4 text-center rounded-lg shadow-xl mx-auto max-w-6xl my-12" data-aos="fade-up" data-aos-duration="800"> <h2 class="text-3xl md:text-4xl font-extrabold mb-4">¿Listo para encontrar tu próximo hogar?</h2> <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
Nuestro equipo de expertos está listo para ayudarte en cada paso del camino. Contáctanos hoy mismo para una consulta gratuita.
</p> <a href="#contacto" class="inline-block bg-white text-pink-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg text-lg">
Contáctanos
</a> </section>`;
}, "C:/Users/Fede/dyad-apps/arquitectura/src/components/CallToAction/CallToAction.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inmobiliaria Demo", "data-astro-cid-s2p4isyu": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "data-astro-cid-s2p4isyu": true })} ${maybeRenderHead()}<section class="py-12 px-4" data-astro-cid-s2p4isyu> <h2 class="text-4xl font-extrabold text-center text-gray-800 mb-10" data-astro-cid-s2p4isyu>Propiedades Destacadas</h2> ${renderComponent($$result2, "PropertyList", PropertyList, { "client:load": true, "slice": true, "client:component-hydration": "load", "client:component-path": "@components/PropertyList/PropertyList", "client:component-export": "default", "data-astro-cid-s2p4isyu": true })} <div class="text-center mt-8" data-astro-cid-s2p4isyu> <a href="/properties" class="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-lg" data-astro-cid-s2p4isyu>
Ver Todas las Propiedades
</a> </div> </section> ${renderComponent($$result2, "SectionInfo", SectionInfo, { "client:load": true, "bgColor": "#FBD9DB", "img": img1, "title": "Nuestros Servicios", "description": "Ofrecemos una gama completa de servicios inmobiliarios, desde la compra y venta de propiedades residenciales y comerciales hasta el alquiler y la gesti\xF3n de propiedades. Nuestro equipo de expertos te guiar\xE1 en cada paso del proceso, asegurando una experiencia fluida y exitosa.", "client:component-hydration": "load", "client:component-path": "@components/SectionInfo/SectionInfo", "client:component-export": "default", "data-astro-cid-s2p4isyu": true })} ${renderComponent($$result2, "SectionInfo", SectionInfo, { "client:load": true, "bgColor": "#bce19f", "right": true, "img": img2, "title": "Proceso Simplificado", "description": "Simplificamos el proceso de compra o venta de tu propiedad. Desde la valoraci\xF3n inicial hasta la firma final, te proporcionamos asesoramiento experto, marketing efectivo y negociaci\xF3n profesional para asegurar los mejores resultados. Tu tranquilidad es nuestra prioridad.", "client:component-hydration": "load", "client:component-path": "@components/SectionInfo/SectionInfo", "client:component-export": "default", "data-astro-cid-s2p4isyu": true })} ${renderComponent($$result2, "SectionInfo", SectionInfo, { "client:load": true, "bgColor": "#ffd088", "img": img3, "title": "Por Qu\xE9 Elegirnos", "description": "Nos destacamos por nuestra atenci\xF3n personalizada, conocimiento profundo del mercado local y un compromiso inquebrantable con la satisfacci\xF3n del cliente. Te ofrecemos soluciones a medida, transparencia total y un equipo dedicado a hacer realidad tus sue\xF1os inmobiliarios. Conf\xEDa en nosotros para tu pr\xF3xima inversi\xF3n.", "client:component-hydration": "load", "client:component-path": "@components/SectionInfo/SectionInfo", "client:component-export": "default", "data-astro-cid-s2p4isyu": true })} ${renderComponent($$result2, "Nosotros", $$Nosotros, { "data-astro-cid-s2p4isyu": true })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "data-astro-cid-s2p4isyu": true })} ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-s2p4isyu": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-s2p4isyu": true })} ` })} `;
}, "C:/Users/Fede/dyad-apps/arquitectura/src/pages/index.astro", void 0);

const $$file = "C:/Users/Fede/dyad-apps/arquitectura/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
