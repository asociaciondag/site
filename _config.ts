import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import esbuild from "lume/plugins/esbuild.ts";
import inline from "lume/plugins/inline.ts";
import postcssExtendRule from "npm:postcss-extend-rule@4.0.0";
import postcssCustomMedia from "npm:postcss-custom-media@9.1.2";

const site = lume(
  {},
  { search: { returnPageData: true } },
);

site.copy("fonts");
site.copy("img");
site.use(inline());

site.use(postcss({
  plugins: [
    postcssExtendRule(),
    postcssCustomMedia(),
  ],
  keepDefaultPlugins: true,
}));

site.use(esbuild());

export default site;
