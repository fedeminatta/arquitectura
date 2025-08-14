import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BN8jMKBt.mjs';
import 'kleur/colors';
import { p as propertiesArray, $ as $$Layout } from '../../chunks/properties_Crmj3Ypg.mjs';
import { b as getImage, $ as $$Image } from '../../chunks/_astro_assets_Bgq8eylA.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$title;
  const { title } = Astro2.params;
  const filteredObjects = propertiesArray.filter(
    (item) => item.propertyName.toLocaleLowerCase() === title?.toLocaleLowerCase()
  );
  let propertyName = "";
  let propertyDescription = "";
  let img;
  let imgW = 0;
  let imgH = 0;
  let url;
  if (filteredObjects.length > 0) {
    propertyName = filteredObjects[0].propertyName;
    propertyDescription = filteredObjects[0].propertyDescription;
    img = filteredObjects[0].img;
    imgW = filteredObjects[0].imgW;
    imgH = filteredObjects[0].imgH;
    url = await getImage({ src: img, format: "webp" });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": propertyName || "Detalle de Propiedad", "data-astro-cid-b4zilqrc": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="relative w-full aspect-video max-h-[80vh] overflow-hidden" data-astro-cid-b4zilqrc> ${url && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": url.src, "alt": propertyName, "width": imgW, "height": imgH, "class": "w-full h-full object-cover object-center rounded-b-3xl shadow-lg", "data-astro-cid-b4zilqrc": true })}`} <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8" data-astro-cid-b4zilqrc> <h1 class="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg capitalize" data-astro-cid-b4zilqrc> ${propertyName} </h1> </div> </header> <article class="p-8 md:p-12 bg-white rounded-t-3xl shadow-xl -mt-8 relative z-10" data-astro-cid-b4zilqrc> <p class="max-w-4xl mx-auto text-lg md:text-xl text-gray-800 leading-relaxed whitespace-pre-line" data-astro-cid-b4zilqrc> ${propertyDescription} </p> <div class="mt-10 text-center" data-astro-cid-b4zilqrc> <a href="/properties" class="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-lg" data-astro-cid-b4zilqrc>
Ver todas las propiedades
</a> </div> </article> ` })} `;
}, "C:/Users/Fede/dyad-apps/arquitectura/src/pages/property/[title].astro", void 0);

const $$file = "C:/Users/Fede/dyad-apps/arquitectura/src/pages/property/[title].astro";
const $$url = "/property/[title]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$title,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
