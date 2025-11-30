export const layout = "layouts/member_list.vto";
export const lang = ["gl", "es"];

export const gl = {
  title: "Socios",
  description: `
    Este é o listado de socios e socias membros da DAG. Asociarse ofrece a oportunidade de ser parte activa na defensa da nosa profesión e tamén presenta unha serie de beneficios exclusivos para membros. Se queres formar parte da DAG, [asóciate aqui](#).
  `,
};
export const es = {
  title: "Socios",
  description: `
    Este é o listado de socios e socias membros da DAG. Asociarse ofrece a oportunidade de ser parte activa na defensa da nosa profesión e tamén presenta unha serie de beneficios exclusivos para membros. Se queres formar parte da DAG, [asóciate aqui](#).
  `,
};

export default function* ({ search, lang }: Lume.Data, {slugify}: Lume.Helpers) {
  const members = search.pages(`type=member lang=${lang}`, "name=asc-locale");

  yield {
    id: `members`,
    results: members,
    url: lang === "gl" ? "/socios/" : "/es/socios/"
  };

  const tags = search.values<string>("tags", `type=member lang=${lang}`);
  
  for (const tag of tags) {
    const slugifyTag = slugify(tag);
    const members = search.pages(`type=member lang=${lang} "${tag}"`, "name=asc-locale");

    yield {
      id: `members-tags-${slugifyTag}`,
      currentTag: tag,
      results: members,
      url: lang === "gl"
        ? `/socios/${slugifyTag}/`
        : `/es/socios/${slugifyTag}/`,
    };
  }
}
