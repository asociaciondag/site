export const layout = "layouts/portfolio_list.vto";
export const main_menu = "members";

export default function* ({ search }: Lume.Data) {
  for (const tag of search.values<string>("tag", "type=portfolio lang=gl")) {
    yield {
      url: `/gl/portfolio/tag/${tag.replace("/", "-")}/`,
      title: `Proxectos dos socios etiquetados como ${tag}`,
      tag,
      lang: "gl",
      type: "portfolio_tag",
    };
  }

  for (const tag of search.values<string>("tag", "type=portfolio lang=es")) {
    yield {
      url: `/es/portfolio/tag/${tag.replace("/", "-")}/`,
      title: `Projectos de los socios etiquetados como ${tag}`,
      tag,
      lang: "es",
      type: "portfolio_tag",
    };
  }
}
