import { expandGlob } from "jsr:@std/fs/expand-glob";
import { parse } from "jsr:@std/yaml/parse";
import { stringify } from "jsr:@std/yaml/stringify";

for await (const file of expandGlob("./socios/*.yml")) {
  if (file.name.startsWith("_")) continue; // Skip files starting with underscore

  const content = await Deno.readTextFile(file.path);
  const data = parse(content) as any;
  const { id } = data;

  if (id) {
    // data.gl = {
    //   bio: data["bio.gl"],
    //   job: data["job.gl"],
    // };
    // data.es = {
    //   bio: data["bio.es"],
    //   job: data["job.es"],
    // };
    // delete data["bio.gl"];
    // delete data["job.gl"];
    // delete data["bio.es"];
    // delete data["job.es"];
    delete data["avatarBig"];

    Deno.writeTextFileSync(file.path, stringify(data));
  }
}
