import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_dYaUyz-A.mjs';
import 'kleur/colors';
import { p as proyectosArray, $ as $$Layout } from '../../chunks/proyectos_DpJFQYkG.mjs';
import { b as getImage, $ as $$Image } from '../../chunks/_astro_assets_DLtH7jv4.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$title;
  const { title } = Astro2.params;
  const objetosFiltrados = proyectosArray.filter(
    (item) => item.titulo.toLocaleLowerCase() === title?.toLocaleLowerCase()
  );
  let titulo = "";
  let description = "";
  let img;
  let imgW = 0;
  let imgH = 0;
  let url;
  if (objetosFiltrados.length > 0) {
    titulo = objetosFiltrados[0].titulo;
    description = objetosFiltrados[0].description;
    img = objetosFiltrados[0].img;
    imgW = objetosFiltrados[0].imgW;
    imgH = objetosFiltrados[0].imgH;
    url = await getImage({ src: img, format: "webp" });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Publicacion", "data-astro-cid-2eduzx4p": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="header" data-astro-cid-2eduzx4p> ${url && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": url.src, "alt": titulo, "width": imgW, "height": imgH, "class": "Img", "data-astro-cid-2eduzx4p": true })}`} </header> <article data-astro-cid-2eduzx4p> <h1 data-astro-cid-2eduzx4p>${titulo}</h1> <p data-astro-cid-2eduzx4p>${description}</p> </article> ` })} `;
}, "G:/web/paginasAstro/arquitectura/src/pages/proyecto/[title].astro", void 0);

const $$file = "G:/web/paginasAstro/arquitectura/src/pages/proyecto/[title].astro";
const $$url = "/proyecto/[title]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$title,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
