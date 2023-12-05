// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  astroAllowShorthand: true,
  useTabs: true,
  singleQuote: true,
  semi: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
