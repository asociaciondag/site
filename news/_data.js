export function url(page) {
  const lang = page.data.lang;

  if (lang === "gl") {
    return `/novas/${page.data.slug}/`;
  }
  if (lang === "es") {
    return `/noticias/${page.data.slug}/`;
  }
}