import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { p as propertiesArray } from './properties_Crmj3Ypg.mjs';
import { s as styles, a as styles$1 } from './index.fc3d85c6_DbJI5O7A.mjs';

const PropertyCard = ({ propertyName, propertyDescription, img, index }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles.card,
      "data-aos": "fade-up",
      "data-aos-duration": 700,
      "data-aos-delay": index * 200 + 400,
      children: /* @__PURE__ */ jsx("a", { href: `/property/${propertyName}`, children: /* @__PURE__ */ jsx("article", { style: { backgroundImage: `url(${img.src})` }, children: /* @__PURE__ */ jsxs("div", { className: styles.text, children: [
        /* @__PURE__ */ jsx("h2", { children: propertyName }),
        /* @__PURE__ */ jsx("p", { children: propertyDescription })
      ] }) }) })
    }
  );
};

const PropertyListSlice = () => {
  return /* @__PURE__ */ jsx("section", { className: styles$1.proyectos, children: propertiesArray.slice(0, 2).map((item, index) => /* @__PURE__ */ jsx(
    PropertyCard,
    {
      propertyName: item.propertyName,
      propertyDescription: item.propertyDescription,
      img: item.img,
      index
    },
    item.propertyName
  )) });
};

function PropertyList({ slice }) {
  if (slice) {
    return /* @__PURE__ */ jsx(PropertyListSlice, {});
  } else {
    return /* @__PURE__ */ jsx("section", { className: styles$1.proyectos, children: propertiesArray.map((item, index) => /* @__PURE__ */ jsx(
      PropertyCard,
      {
        propertyName: item.propertyName,
        propertyDescription: item.propertyDescription,
        img: item.img,
        index
      },
      Math.random()
    )) });
  }
}

export { PropertyList as P };
