export const layout = "layouts/news_list.vto";
export const lang = ["gl", "es"];

export const gl = {
  title: "Novas",
  description: `
  Podes suscribirte ao noso [feed RSS](#) para estar ao tanto das últimas novas.
  Tamén podes seguirnos nas redes sociais de [X](https://x.com/asociaciondag) e [Instagram](https://www.instagram.com/asociaciondag).
  `,
};
export const es = {
  title: "Noticias",
  description: `
  Puedes suscribirte a nuestro [feed RSS](#) para estar al tanto de las últimas noticias.
  También puedes seguirnos en las redes sociales de [X](https://x.com/asociaciondag) e [Instagram](https://www.instagram.com/asociaciondag).
  `,
};

export default function* ({ search, paginate, lang }: Lume.Data, {slugify}: Lume.Helpers) {
  const pages = search.pages(`type=news lang=${lang}`, "date=desc");

  const url = lang === "gl"
    ? (page: number) => (page === 1 ? "/novas/" : `/novas/${page}/`)
    : (page: number) => (page === 1 ? "/es/noticias/" : `/es/noticias/${page}/`);
  for (const page of paginate(pages, { url, size: 25 })) {
    yield {
      id: `news-${page.pagination.page}`,
      ...page,
    };
  }

  const tags = search.values<string>(`tags`, `type=news lang=${lang}`);

  for (const tag of tags) {
    const slugifyTag = slugify(tag);
    const pages = search.pages(`type=news lang=${lang} "${tag}"`);
    const url = lang === "gl"
      ? (page: number) => (page === 1 ? `/novas/${slugifyTag}/` : `/novas/${slugifyTag}/${page}/`)
      : (page: number) => (page === 1 ? `/es/noticias/${slugifyTag}/` : `/es/noticias/${slugifyTag}/${page}/`)
    ;
    for (const page of paginate(pages, { url, size: 25 })) {
      yield {
        id: `news-tags-${slugifyTag}-${page.pagination.page}`,
        currentTag: tag,
        ...page,
      };
    }
  }
}
