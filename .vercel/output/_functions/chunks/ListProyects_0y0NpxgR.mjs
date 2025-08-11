import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { p as proyectosArray } from './proyectos_DpJFQYkG.mjs';
import { s as styles, a as styles$1 } from './index.e1ce172d_DbJI5O7A.mjs';

const Proyects = ({ title, description, img, index }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles.card,
      "data-aos": "fade-up",
      "data-aos-duration": 700,
      "data-aos-delay": index * 200 + 400,
      children: /* @__PURE__ */ jsx("a", { href: `/proyecto/${title}`, children: /* @__PURE__ */ jsx("article", { style: { backgroundImage: `url(${img.src})` }, children: /* @__PURE__ */ jsxs("div", { className: styles.text, children: [
        /* @__PURE__ */ jsx("h2", { children: title }),
        /* @__PURE__ */ jsx("p", { children: description })
      ] }) }) })
    }
  );
};

const ListProyectsSlice = () => {
  return /* @__PURE__ */ jsx("section", { className: styles$1.proyectos, children: proyectosArray.slice(0, 2).map((item, index) => /* @__PURE__ */ jsx(
    Proyects,
    {
      title: item.titulo,
      description: item.description,
      img: item.img,
      index
    },
    item.titulo
  )) });
};

function ListProyects({ slice }) {
  if (slice) {
    return /* @__PURE__ */ jsx(ListProyectsSlice, {});
  } else {
    return /* @__PURE__ */ jsx("section", { className: styles$1.proyectos, children: proyectosArray.map((item, index) => /* @__PURE__ */ jsx(
      Proyects,
      {
        title: item.titulo,
        description: item.description,
        img: item.img,
        index
      },
      Math.random()
    )) });
  }
}

export { ListProyects as L };
