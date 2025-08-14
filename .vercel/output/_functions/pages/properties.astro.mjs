import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cs1THcPs.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/properties_Aa0lrP3x.mjs';
import { P as PropertyList } from '../chunks/PropertyList_Ds_U3y1C.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const description = `Bienvenido a nuestra galer\xEDa de propiedades, donde la visi\xF3n de su hogar ideal se encuentra con la realidad. Nos enorgullece presentar una selecci\xF3n de nuestras propiedades m\xE1s destacadas que reflejan nuestra dedicaci\xF3n a la excelencia en el mercado inmobiliario.

Cada propiedad que ofrecemos es una manifestaci\xF3n de calidad y experiencia, fusionando estilos contempor\xE1neos con soluciones inteligentes y sostenibles. Entendemos que cada hogar tiene una historia que contar y cada espacio debe ser una expresi\xF3n \xFAnica de su prop\xF3sito`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Propiedades", "data-astro-cid-akaj74l7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="px-5 py-10 text-center bg-white shadow-md rounded-lg mx-auto max-w-4xl mt-8" data-astro-cid-akaj74l7> <h1 class="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4" data-astro-cid-akaj74l7>
Galería de Propiedades
</h1> <p class="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line" data-astro-cid-akaj74l7> ${description} </p> </header> <section class="py-10" data-astro-cid-akaj74l7> ${renderComponent($$result2, "PropertyList", PropertyList, { "client:load": true, "slice": false, "client:component-hydration": "load", "client:component-path": "@components/PropertyList/PropertyList", "client:component-export": "default", "data-astro-cid-akaj74l7": true })} </section> ` })} `;
}, "C:/Users/Fede/dyad-apps/arquitectura/src/pages/properties/index.astro", void 0);

const $$file = "C:/Users/Fede/dyad-apps/arquitectura/src/pages/properties/index.astro";
const $$url = "/properties";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
