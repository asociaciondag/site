import { expandGlob } from "jsr:@std/fs/expand-glob";
import { parse } from "jsr:@std/yaml/parse"
import { stringify } from "jsr:@std/yaml/stringify"

for await (const file of expandGlob("./portfolio/*.yml")) {
  if (file.name.startsWith("_")) continue; // Skip files starting with underscore
  
  const content = await Deno.readTextFile(file.path);
  const data = parse(content) as any;
  const {lang, basename } = data;

  if (basename && lang) {
    if (lang === "gl") {
      data.oldUrl = `/gl/portfolio/${basename}/`;
    } else if (lang === "es") {
      data.oldUrl = `/es/portfolio/${basename}/`;
      if (basename.endsWith("-es")) {
        data.basename = basename.slice(0, -3);
      }
    }

    Deno.writeTextFileSync(file.path, stringify(data));
  }
}
