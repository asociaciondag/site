export function url(page) {
  const lang = page.data.lang;

  if (lang === "gl") {
    return `/novas/${page.data.basename}/`;
  }
  if (lang === "es") {
    return `/noticias/${page.data.basename}/`;
  }
}
