export const layout = "layouts/portfolio_list.vto";
export const lang = ["gl", "es"];

export const gl = {
  title: "Portfolio",
  description: `
  Podes suscribirte ao noso [feed RSS](#) para estar ao tanto das últimas novas.
  Tamén podes seguirnos nas redes sociais de [X](https://x.com/asociaciondag) e [Instagram](https://www.instagram.com/asociaciondag).
  `,
};
export const es = {
  title: "Portfolio",
  description: `
  Puedes suscribirte a nuestro [feed RSS](#) para estar al tanto de las últimas noticias.
  También puedes seguirnos en las redes sociales de [X](https://x.com/asociaciondag) e [Instagram](https://www.instagram.com/asociaciondag).
  `,
};

export default function* ({ search, paginate, lang }: Lume.Data) {
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
}
