export const layout = "layouts/news_list.vto";
export const main_menu = "news";

export default function* ({ search }: Lume.Data) {
  for (const tag of search.values<string>("tag", "type=news lang=gl")) {
    yield {
      url: `/gl/novas/${tag.replace("/", "-")}/`,
      title: `Novas de ${tag}`,
      tag,
      lang: "gl",
      type: "news_tag",
    };
  }

  for (const tag of search.values<string>("tag", "type=news lang=es")) {
    yield {
      url: `/es/noticias/${tag.replace("/", "-")}/`,
      title: `Noticias de ${tag}`,
      tag,
      lang: "es",
      type: "news_tag",
    };
  }
}
