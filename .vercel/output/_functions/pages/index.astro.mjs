import { c as createComponent, m as maybeRenderHead, i as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_dYaUyz-A.mjs';
import 'kleur/colors';
import { $ as $$Layout, i as img1, a as img2, b as img3 } from '../chunks/proyectos_DpJFQYkG.mjs';
import { L as ListProyects } from '../chunks/ListProyects_0y0NpxgR.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { s as styles } from '../chunks/index.95d291e9_v3fe0uw0.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const headerImg = new Proxy({"src":"/_astro/header.DO6G2N5l.webp","width":2400,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/web/paginasAstro/arquitectura/src/img/header.webp";
							}
							
							return target[name];
						}
					});

const SectionInfo = ({ title, description, img, right, bgColor }) => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: styles.section,
      id: "acerca_de",
      style: { backgroundColor: bgColor },
      "data-aos": `fade-${right ? "right" : "left"}`,
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
								return "G:/web/paginasAstro/arquitectura/src/img/descarga.jpeg";
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
								return "G:/web/paginasAstro/arquitectura/src/img/descarga2.jpeg";
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
								return "G:/web/paginasAstro/arquitectura/src/img/descarga3.jpeg";
							}
							
							return target[name];
						}
					});

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="nosotros" data-astro-cid-bbjmvk62> <h2 data-astro-cid-bbjmvk62>Nustro Equipo</h2> <article${addAttribute({ background: "#FBD9DB" }, "style")} data-aos="fade-up"${addAttribute(500, "data-aos-duration")}${addAttribute(400, "data-aos-delay")} data-astro-cid-bbjmvk62> <img${addAttribute(personImg1.src, "src")} alt="" data-astro-cid-bbjmvk62> <h3 data-astro-cid-bbjmvk62>María</h3> <span data-astro-cid-bbjmvk62>Arquitecta</span> </article> <article${addAttribute({ background: "#bce19f" }, "style")} data-aos="fade-up"${addAttribute(500, "data-aos-duration")}${addAttribute(600, "data-aos-delay")} data-astro-cid-bbjmvk62> <img${addAttribute(personImg2.src, "src")} alt="" data-astro-cid-bbjmvk62> <h3 data-astro-cid-bbjmvk62>Lorenzo</h3> <span data-astro-cid-bbjmvk62>Encargado de Obras</span> </article> <article${addAttribute({ background: "#ffd088" }, "style")} data-aos="fade-up"${addAttribute(500, "data-aos-duration")}${addAttribute(800, "data-aos-delay")} data-astro-cid-bbjmvk62> <img${addAttribute(personImg3.src, "src")} alt="" data-astro-cid-bbjmvk62> <h3 data-astro-cid-bbjmvk62>Fernando</h3> <span data-astro-cid-bbjmvk62>Administración</span> </article> </section> `;
}, "G:/web/paginasAstro/arquitectura/src/components/Nosotros/Nosotros.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-k23owhpg> <a href="#inicio" data-astro-cid-k23owhpg>Inicio</a> <a href="#acerca_de" data-astro-cid-k23owhpg>Acerca de</a> <a href="#nosotros" data-astro-cid-k23owhpg>Nosotros</a> <a href="#contacto" data-astro-cid-k23owhpg>Contacto</a> </nav> `;
}, "G:/web/paginasAstro/arquitectura/src/components/Footer/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer id="contacto" data-astro-cid-ak3upacl> <p data-astro-cid-ak3upacl>Número de teléfono: <strong data-astro-cid-ak3upacl>(123) 456-7890</strong></p> <p data-astro-cid-ak3upacl>Correo electrónico: <strong data-astro-cid-ak3upacl>info@example.com</strong></p> <p data-astro-cid-ak3upacl>Ubicación: <strong data-astro-cid-ak3upacl>123 Calle Principal, Ciudad</strong></p> </footer> `;
}, "G:/web/paginasAstro/arquitectura/src/components/Footer/Footer.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Arquitectura demo", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header id="inicio" data-astro-cid-j7pv25f6> <h1 data-aos="fade-down-right" data-astro-cid-j7pv25f6>Arquitectura</h1> <img${addAttribute(headerImg.src, "src")} alt="header imagen" data-astro-cid-j7pv25f6> </header> ${renderComponent($$result2, "ListProyects", ListProyects, { "client:load": true, "slice": true, "client:component-hydration": "load", "client:component-path": "@components/ListProyects/ListProyects", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "SectionInfo", SectionInfo, { "client:load": true, "bgColor": "#FBD9DB", "img": img1, "title": "\xBFQui\xE9nes somos?", "description": "Nuestro sistema es r\xE1pido, \xE1gil, seguro y de calidad. Trabajamos en barrios abiertos o privados, en zonas residenciales o lotes con servicios. Construimos casas para todos los d\xEDas, de fin de semana y ampliaciones. ", "client:component-hydration": "load", "client:component-path": "@components/SectionInfo/SectionInfo", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "SectionInfo", SectionInfo, { "client:load": true, "bgColor": "#bce19f", "right": true, "img": img2, "title": "\xBFQu\xE9 hacemos?", "description": "Nuestro sistema es r\xE1pido, \xE1gil, seguro y de calidad. Trabajamos en barrios abiertos o privados, en zonas residenciales o lotes con servicios. Construimos casas para todos los d\xEDas, de fin de semana y ampliaciones", "client:component-hydration": "load", "client:component-path": "@components/SectionInfo/SectionInfo", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "SectionInfo", SectionInfo, { "client:load": true, "bgColor": "#ffd088", "img": img3, "title": "\xBFPor qu\xE9 nosotros?", "description": "Te ofrecemos una atenci\xF3n personalizada que se ajusta a tu presupuesto y a tus requerimientos para otorgarte la casa que quieras tener, que sea pensada, planificada y adaptada desde sus cimientos para vos y tu familia. El m\xE9todo de construcci\xF3n que usamos no s\xF3lo es innovador y de vanguardia ac\xE1 en la regi\xF3n, sino que comparado con la construcci\xF3n tradicional se emplea la mitad del tiempo y para el futuro cuenta con una gran facilidad a la hora de realizar reparaciones. Te garantizamos la mejor atenci\xF3n que existe en el mercado, al alcance de tu bolsillo", "client:component-hydration": "load", "client:component-path": "@components/SectionInfo/SectionInfo", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Nosotros", $$Nosotros, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "G:/web/paginasAstro/arquitectura/src/pages/index.astro", void 0);

const $$file = "G:/web/paginasAstro/arquitectura/src/pages/index.astro";
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
