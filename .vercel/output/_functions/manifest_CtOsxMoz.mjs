import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_dYaUyz-A.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BBBOen9B.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///G:/web/paginasAstro/arquitectura/","cacheDir":"file:///G:/web/paginasAstro/arquitectura/node_modules/.astro/","outDir":"file:///G:/web/paginasAstro/arquitectura/dist/","srcDir":"file:///G:/web/paginasAstro/arquitectura/src/","publicDir":"file:///G:/web/paginasAstro/arquitectura/public/","buildClientDir":"file:///G:/web/paginasAstro/arquitectura/dist/client/","buildServerDir":"file:///G:/web/paginasAstro/arquitectura/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.xpF7FBqz.css"},{"type":"inline","content":".header[data-astro-cid-2eduzx4p]{padding:10px 30px;width:100%;aspect-ratio:16/9;max-height:80vh;overflow-y:hidden}.header[data-astro-cid-2eduzx4p] .Img[data-astro-cid-2eduzx4p]{aspect-ratio:16/9;border-radius:20px;width:100%;height:100%;object-fit:cover;background-attachment:fixed;object-position:bottom}article[data-astro-cid-2eduzx4p]{padding:40px;background:#f1ffe6}article[data-astro-cid-2eduzx4p] h1[data-astro-cid-2eduzx4p]{text-align:center;text-transform:capitalize;font-style:italic;font-size:clamp(1.5rem,-.0469rem + 7.22vw,4.2rem);margin-top:0;margin-bottom:40px;background:radial-gradient(circle at bottom,#e5056a 15%,#f08eb0 40%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:800}article[data-astro-cid-2eduzx4p] p[data-astro-cid-2eduzx4p]{max-width:70ch;font-weight:500;margin:0 auto;text-wrap:balance;white-space:pre-line;color:#000}\n"}],"routeData":{"route":"/proyecto/[title]","isIndex":false,"type":"page","pattern":"^\\/proyecto\\/([^/]+?)\\/?$","segments":[[{"content":"proyecto","dynamic":false,"spread":false}],[{"content":"title","dynamic":true,"spread":false}]],"params":["title"],"component":"src/pages/proyecto/[title].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.xpF7FBqz.css"},{"type":"inline","content":"header[data-astro-cid-y22iwnlk]{padding:0 20px}header[data-astro-cid-y22iwnlk] h1[data-astro-cid-y22iwnlk]{color:#f10548;font-size:35px}header[data-astro-cid-y22iwnlk] p[data-astro-cid-y22iwnlk]{font-size:18px;font-weight:500;white-space:pre;text-wrap:balance;max-width:70ch}section[data-astro-cid-y22iwnlk]{padding:40px;display:flex;flex-wrap:wrap;gap:25px;justify-content:center}\n._card_1y7iq_1{width:400px;max-width:90vw;height:auto;aspect-ratio:1/1}article{border-radius:6px;width:100%;background:center/cover;background-size:cover;background-color:#fff;height:100%;position:relative;overflow:hidden;color:#fff;padding:20px;cursor:pointer}article:hover ._text_1y7iq_21{opacity:1;transform:translateY(0)}article a{text-decoration:none;color:#fff}article ._text_1y7iq_21{padding:30px;background-color:#0000009a;width:100%;height:auto;overflow:hidden;opacity:0;transition:all .2s;position:absolute;bottom:0;left:0;transform:translateY(70%)}article ._text_1y7iq_21 p{display:inline-block;width:100%;color:#d5d5d5;text-wrap:balance;white-space:nowrap;font-weight:500;margin-top:10px;overflow:hidden;text-overflow:ellipsis;font-style:italic}article ._text_1y7iq_21 h2{text-align:center;color:#f23067}@media screen and (max-width: 380px){article ._text_1y7iq_21{padding:10px}article ._text_1y7iq_21 h2{font-size:18px}article ._text_1y7iq_21 p{font-size:16px}}._proyectos_14vik_1{padding:40px;display:flex;flex-wrap:wrap;gap:30px;justify-content:center}@media screen and (max-width: 580px){._proyectos_14vik_1{padding:20px 0}}\n"}],"routeData":{"route":"/proyectos","isIndex":true,"type":"page","pattern":"^\\/proyectos\\/?$","segments":[[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyectos/index.astro","pathname":"/proyectos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.xpF7FBqz.css"},{"type":"inline","content":"._section_18elj_1{display:flex;width:90%;flex-wrap:wrap;gap:10px;margin:40px auto;border-radius:8px;justify-content:center;align-content:center;align-items:center;box-shadow:0 0 6px #00000030;overflow:hidden;background-color:#fff;padding:20px 0}._section_18elj_1 ._img_18elj_16{max-width:95%;overflow:hidden;margin:0;max-height:280px;border-radius:6px}._section_18elj_1 ._img_18elj_16 img{width:420px;max-width:100%;border-radius:6px;aspect-ratio:16/9;object-fit:cover;object-position:center}._article_18elj_32{color:#000;width:auto;cursor:initial;height:auto}._article_18elj_32 p{max-width:50ch;text-wrap:balance}section[data-astro-cid-bbjmvk62]{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;padding:0 30px 30px}section[data-astro-cid-bbjmvk62] h2[data-astro-cid-bbjmvk62]{width:100%;text-align:center;margin-top:0}section[data-astro-cid-bbjmvk62] article[data-astro-cid-bbjmvk62]{color:#000;cursor:initial;display:flex;flex-direction:column;width:300px;overflow:hidden;justify-content:center;align-items:center}section[data-astro-cid-bbjmvk62] article[data-astro-cid-bbjmvk62] img[data-astro-cid-bbjmvk62]{width:100%;border-radius:3px;cursor:initial}nav[data-astro-cid-k23owhpg]{position:fixed;padding:10px;display:flex;flex-wrap:wrap;grid-area:30px;justify-content:center;background:#ffd088;bottom:0;left:0;width:100vw}nav[data-astro-cid-k23owhpg] a[data-astro-cid-k23owhpg]{color:#000;text-decoration:none;margin:0 10px;transition:scale .3s;padding:5px;border-radius:3px;font-weight:600}nav[data-astro-cid-k23owhpg] a[data-astro-cid-k23owhpg]:hover{scale:1.08;background:#fff;color:#f10548}footer[data-astro-cid-ak3upacl]{background:#ffd088;color:#000;padding:20px 20px 45px;text-align:center}footer[data-astro-cid-ak3upacl] p[data-astro-cid-ak3upacl]{margin:10px 0}header[data-astro-cid-j7pv25f6]{position:relative;aspect-ratio:16/9;max-height:70vh;width:100%;overflow:hidden;padding:10px 20px}header[data-astro-cid-j7pv25f6] h1[data-astro-cid-j7pv25f6]{z-index:100;position:absolute;top:25%;left:26%;transform:translate(-50%,-50%);color:#ec2165;text-shadow:3px 3px #600221;font-size:clamp(1.125rem,-.0469rem + 8.22vw,8.025rem);text-transform:uppercase;font-weight:800;font-style:italic}header[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{object-fit:cover;object-position:center;width:100%;height:100%;filter:brightness(85%);border-radius:20px}\n._card_1y7iq_1{width:400px;max-width:90vw;height:auto;aspect-ratio:1/1}article{border-radius:6px;width:100%;background:center/cover;background-size:cover;background-color:#fff;height:100%;position:relative;overflow:hidden;color:#fff;padding:20px;cursor:pointer}article:hover ._text_1y7iq_21{opacity:1;transform:translateY(0)}article a{text-decoration:none;color:#fff}article ._text_1y7iq_21{padding:30px;background-color:#0000009a;width:100%;height:auto;overflow:hidden;opacity:0;transition:all .2s;position:absolute;bottom:0;left:0;transform:translateY(70%)}article ._text_1y7iq_21 p{display:inline-block;width:100%;color:#d5d5d5;text-wrap:balance;white-space:nowrap;font-weight:500;margin-top:10px;overflow:hidden;text-overflow:ellipsis;font-style:italic}article ._text_1y7iq_21 h2{text-align:center;color:#f23067}@media screen and (max-width: 380px){article ._text_1y7iq_21{padding:10px}article ._text_1y7iq_21 h2{font-size:18px}article ._text_1y7iq_21 p{font-size:16px}}._proyectos_14vik_1{padding:40px;display:flex;flex-wrap:wrap;gap:30px;justify-content:center}@media screen and (max-width: 580px){._proyectos_14vik_1{padding:20px 0}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["G:/web/paginasAstro/arquitectura/src/pages/index.astro",{"propagation":"none","containsHead":true}],["G:/web/paginasAstro/arquitectura/src/pages/proyecto/[title].astro",{"propagation":"none","containsHead":true}],["G:/web/paginasAstro/arquitectura/src/pages/proyectos/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/proyecto/[title]@_@astro":"pages/proyecto/_title_.astro.mjs","\u0000@astro-page:src/pages/proyectos/index@_@astro":"pages/proyectos.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CtOsxMoz.mjs","G:/web/paginasAstro/arquitectura/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_pSPnYXgZ.mjs","@components/ListProyects/ListProyects":"_astro/ListProyects.CCkDUmFn.js","@components/SectionInfo/SectionInfo":"_astro/SectionInfo.DWid3muo.js","@astrojs/react/client.js":"_astro/client.CCzkHhPY.js","G:/web/paginasAstro/arquitectura/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.B4D-AgUh.js","G:/web/paginasAstro/arquitectura/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.DZnDNxNb.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/img1.D8dK8_eP.webp","/_astro/img3.DSGOLkpy.webp","/_astro/header.DO6G2N5l.webp","/_astro/img2.CCSWwzeO.webp","/_astro/descarga2.CCTH3OAh.jpeg","/_astro/descarga.DkSIQiA8.jpeg","/_astro/descarga3.DykY78eQ.jpeg","/_astro/img4.DXgoqwHB.webp","/_astro/img5.Zljap3Db.webp","/_astro/img6.Dw1Lm0UO.webp","/_astro/index.xpF7FBqz.css","/favicon.svg","/_astro/client.CCzkHhPY.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.DZnDNxNb.js","/_astro/index.95d291e9.Cpw9I4_z.js","/_astro/index.B28oNxVQ.js","/_astro/index.Bc7sp80R.css","/_astro/index.C7tvbRbT.css","/_astro/index.e1ce172d.Bn0QUUHY.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/Layout.astro_astro_type_script_index_0_lang.B4D-AgUh.js","/_astro/ListProyects.CCkDUmFn.js","/_astro/SectionInfo.DWid3muo.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ikaoFb0NshmXZFARgIInjC2Y2exYLyfG0rVi08D1h+U="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
