import { expandGlob } from "jsr:@std/fs/expand-glob";
import { parse } from "jsr:@std/yaml/parse";

for await (const file of expandGlob("./socios/*.yml")) {
  if (file.name.startsWith("_")) continue; // Skip files starting with underscore

  const content = await Deno.readTextFile(file.path);
  const data = parse(content) as any;
  const { id, basename } = data;

  if (id) {
    const newName = `${id}_${basename}.yml`;
    Deno.rename(file.path, `./socios/${newName}`);
  }
}
