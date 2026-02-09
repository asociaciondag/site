import lume from "lume/mod.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import inline from "lume/plugins/inline.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import relations from "lume/plugins/relations.ts";
import date from "lume/plugins/date.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import basePath from "lume/plugins/base_path.ts";
import favicon from "lume/plugins/favicon.ts";
import icons from "lume/plugins/icons.ts";
import pagefind from "lume/plugins/pagefind.ts";
import gl from "npm:date-fns@4.1.0/locale/gl";
import es from "npm:date-fns@4.1.0/locale/es";

const site = lume();

site.add("fonts")
  .add("img")
  .add("files")
  .use(date({
    locales: { gl, es },
    formats: {
      MONTH: "MMMM yyyy",
    },
  }))
  .add("style.css")
  .use(favicon())
  .use(icons())
  .use(lightningcss())
  .use(basePath())
  .use(slugifyUrls())
  .use(inline())
  .use(pagefind())
  .use(multilanguage({
    languages: ["gl", "es"],
    defaultLanguage: "gl",
  }))
  .scopedUpdates(
    (file) => file.startsWith("/img"),
    (file) => file.endsWith(".css"),
  )
  .use(relations({
    foreignKeys: {
      member: {
        foreignKey: "members_id",
        relationKey: "member",
        pluralRelationKey: "members",
        filter: (data1, data2) => data1.lang === data2.lang,
      },
      portfolio: {
        foreignKey: "portfolio_id",
        relationKey: "portfolio",
        pluralRelationKey: "portfolios",
        filter: (data1, data2) => data1.lang === data2.lang,
      },
    },
  }));

export default site;
