export const layout = "layouts/news_list.njk";
export const main_menu = "news";

export default function* ({ search }: Lume.PageData, ): Generator<Lume.PageData> {
  for (const tag of search.tags("type=news lang=gl")) {
    yield {
      url: `/gl/novas/${tag.replace("/", "-")}/`,
      title: `Novas de ${tag}`,
      tag,
      lang: "gl",
      type: "news_tag"
    }
  }

  for (const tag of search.tags("type=news lang=es")) {
    yield {
      url: `/es/noticias/${tag.replace("/", "-")}/`,
      title: `Noticias de ${tag}`,
      tag,
      lang: "es",
      type: "news_tag"
    }
  }
}
