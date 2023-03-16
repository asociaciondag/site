export const layout = "layouts/portfolio_list.njk";
export const main_menu = "members";

export default function* ({ search }: Lume.PageData, ): Generator<Lume.PageData> {
  for (const tag of search.tags("type=portfolio lang=gl")) {
    yield {
      url: `/gl/portfolio/tag/${tag.replace("/", "-")}/`,
      title: `Proxectos dos socios etiquetados como ${tag}`,
      tag,
      lang: "gl",
      type: "portfolio_tag"
    }
  }

  for (const tag of search.tags("type=portfolio lang=es")) {
    yield {
      url: `/es/portfolio/tag/${tag.replace("/", "-")}/`,
      title: `Projectos de los socios etiquetados como ${tag}`,
      tag,
      lang: "es",
      type: "portfolio_tag"
    }
  }
}
