import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import esbuild from "lume/plugins/esbuild.ts";
import inline from "lume/plugins/inline.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import date from "lume/plugins/date.ts";
import postcssExtendRule from "npm:postcss-extend-rule@4.0.0";
import postcssCustomMedia from "npm:postcss-custom-media@9.1.2";
import gl from "npm:date-fns/locale/gl/index.js";
import es from "npm:date-fns/locale/es/index.js";

const site = lume(
  {},
  { search: { returnPageData: true } },
);

site.copy("fonts");
site.copy("img");
site.use(inline());
site.use(date({
  locales: { gl, es }
}));

site.use(postcss({
  plugins: [
    postcssExtendRule(),
    postcssCustomMedia(),
  ],
  keepDefaultPlugins: true,
}));

site.use(esbuild());
site.use(multilanguage());

export default site;
