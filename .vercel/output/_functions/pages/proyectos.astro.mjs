import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_dYaUyz-A.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/proyectos_DpJFQYkG.mjs';
import { L as ListProyects } from '../chunks/ListProyects_0y0NpxgR.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const descripcion = `Bienvenido a la galer\xEDa de proyectos, donde la visi\xF3n arquitect\xF3nica se encuentra con la innovaci\xF3n y la funcionalidad. Nos enorgullece presentar una selecci\xF3n de nuestros proyectos m\xE1s destacados que reflejan nuestra dedicaci\xF3n a la excelencia en el dise\xF1o arquitect\xF3nico.

Cada proyecto que emprendemos es una manifestaci\xF3n de creatividad y experiencia, fusionando estilos contempor\xE1neos con soluciones inteligentes y sostenibles. Entendemos que cada edificio tiene una historia que contar y cada espacio debe ser una expresi\xF3n \xFAnica de su prop\xF3sito.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "proyectos", "data-astro-cid-y22iwnlk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-y22iwnlk> <h1 data-astro-cid-y22iwnlk>Galeria de Proyectos</h1> <p data-astro-cid-y22iwnlk>${descripcion}</p> </header> <section data-astro-cid-y22iwnlk> ${renderComponent($$result2, "ListProyects", ListProyects, { "client:load": true, "slice": false, "client:component-hydration": "load", "client:component-path": "@components/ListProyects/ListProyects", "client:component-export": "default", "data-astro-cid-y22iwnlk": true })} </section> ` })} `;
}, "G:/web/paginasAstro/arquitectura/src/pages/proyectos/index.astro", void 0);

const $$file = "G:/web/paginasAstro/arquitectura/src/pages/proyectos/index.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
