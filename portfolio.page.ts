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
