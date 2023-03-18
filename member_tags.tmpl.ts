export const layout = "layouts/member_list.njk";
export const main_menu = "news";

export default function* ({ search }: Lume.PageData): Generator<Lume.PageData> {
  for (const tag of search.tags("type=member lang=gl")) {
    yield {
      url: `/gl/socios/${tag.replace("/", "-")}/`,
      title: `Socios de ${tag}`,
      tag,
      lang: "gl",
      type: "members_tag",
    };
  }

  for (const tag of search.tags("type=member lang=es")) {
    yield {
      url: `/es/socios/${tag.replace("/", "-")}/`,
      title: `Socios de ${tag}`,
      tag,
      lang: "es",
      type: "members_tag",
    };
  }
}
