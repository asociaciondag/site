import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume(
  {},
  { search: { returnPageData: true } }
);
site.use(postcss());

export default site;
