import { expandGlob } from "jsr:@std/fs/expand-glob";
import { parse } from "jsr:@std/yaml/parse"

for await (const file of expandGlob("./news/*.yml")) {
  if (file.name.startsWith("_")) continue; // Skip files starting with underscore
  
  const content = await Deno.readTextFile(file.path);
  const data = parse(content) as any;
  const {id, lang} = data;

  if (id && lang) {
    const newName = `${id}_${file.name.replace(/\.yml$/, `_${lang}.yml`)}`;
    Deno.rename(file.path, `./news/${newName}`);
  }
}
