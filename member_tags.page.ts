export const layout = "layouts/member_list.vto";
export const main_menu = "news";

export default function* ({ search }: Lume.Data) {
  for (const tag of search.values<string>("tag", "type=member lang=gl")) {
    yield {
      url: `/gl/socios/${tag.replace("/", "-")}/`,
      title: `Socios de ${tag}`,
      tag,
      lang: "gl",
      type: "members_tag",
    };
  }

  for (const tag of search.values<string>("tag", "type=member lang=es")) {
    yield {
      url: `/es/socios/${tag.replace("/", "-")}/`,
      title: `Socios de ${tag}`,
      tag,
      lang: "es",
      type: "members_tag",
    };
  }
}
