export function url(page) {
  const lang = page.data.lang;

  if (lang === "gl") {
    return `/${lang}/novas/${page.data.slug}/`;
  }
  if (lang === "es") {
    return `/${lang}/noticias/${page.data.slug}/`;
  }
}