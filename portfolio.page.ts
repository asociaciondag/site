export const layout = "layouts/portfolio_list.vto";
export const lang = ["gl", "es"];

export const gl = {
  title: "Portfolio",
  description: `
  Esta é unha pequena mostra de proxectos realizados polos socios da DAG.
  Tamén podes ver a [listaxe de socios](/socios/) e os seus respectivos portfolios.
  `,
};
export const es = {
  title: "Portfolio",
  description: `
  Esta es una pequeña muestra de proyectos realizados por los socios de la DAG.
  También puedes ver el [listado de socios](/es/socios/) y sus respectivos portfolios.
  `,
};

export default function* ({ search, paginate, lang }: Lume.Data, {slugify}: Lume.Helpers) {
  const pages = search.pages(`type=portfolio lang=${lang}`, "name=desc");
  const url = (
    page: number,
  ) => (page === 1 ? "/portfolio/" : `/portfolio/${page}/`);

  for (const page of paginate(pages, { url, size: 25 })) {
    yield {
      id: `portfolio-${page.pagination.page}`,
      ...page,
    };
  }

  const tags = search.values<string>(`tags`, `type=portfolio lang=${lang}`);

  for (const tag of tags) {
    const slugifyTag = slugify(tag);
    const pages = search.pages(`type=portfolio lang=${lang} "${tag}"`);
    const url = lang === "gl"
      ? (page: number) => (page === 1 ? `/portfolio/${slugifyTag}/` : `/portfolio/${slugifyTag}/${page}/`)
      : (page: number) => (page === 1 ? `/es/portfolio/${slugifyTag}/` : `/es/portfolio/${slugifyTag}/${page}/`)
    ;
    for (const page of paginate(pages, { url, size: 25 })) {
      yield {
        id: `portfolio-tags-${slugifyTag}-${page.pagination.page}`,
        currentTag: tag,
        ...page,
      };
    }
  }
}
