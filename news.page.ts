export const layout = "layouts/news_list.vto";
export const lang = ["gl", "es"];

export const gl = {
  title: "Novas",
};
export const es = {
  title: "Noticias",
};

export default function* ({ search, paginate, lang }: Lume.Data) {
  const pages = search.pages(`type=news lang=${lang}`, "date=desc");

  const url = lang === "gl"
    ? (page: number) => (page === 1 ? "/novas/" : `/novas/${page}/`)
    : (page: number) => (page === 1 ? "/noticias/" : `/noticias/${page}/`);

  for (const page of paginate(pages, { url, size: 25 })) {
    yield {
      id: `news-${page.pagination.page}`,
      ...page,
    };
  }
}
