import { expandGlob } from "jsr:@std/fs/expand-glob";
import { parse } from "jsr:@std/yaml/parse"

for await (const file of expandGlob("./pages/*.yml")) {
  if (file.name.startsWith("_")) continue; // Skip files starting with underscore
  
  const content = await Deno.readTextFile(file.path);
  const data = parse(content) as any;
  const {id, lang, basename } = data;

  if (id && lang) {
    const langSuffix = Array.isArray(lang) ? "" : `_${lang}`;
    let name = basename;
    if (name.endsWith(`-${lang}`)) {
      name = name.slice(0, -(`-${lang}`).length);
    }
    const newName = `${id}_${name}${langSuffix}.yml`;
    Deno.rename(file.path, `./news/${newName}`);
  }
}
