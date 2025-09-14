import { expandGlob } from "jsr:@std/fs/expand-glob";
import { parse } from "jsr:@std/yaml/parse";
import { stringify } from "jsr:@std/yaml/stringify";

for await (const file of expandGlob("./portfolio/*.yml")) {
  if (file.name.startsWith("_")) continue; // Skip files starting with underscore

  const content = await Deno.readTextFile(file.path);
  const data = parse(content) as any;
  const { info } = data;

  if (!info) continue;

  for (const item of Object.values(info) as any[]) {
    item.name = item.name.endsWith(":") ? item.name.slice(0, -1) : item.name;
    item.name = item.name.trim();
  }

  const year = info.find((item: any) =>
    item.name === "Ano" || item.name === "Año"
  );
  if (year) {
    data.year = year.value;
    info.splice(info.indexOf(year), 1);
  }
  const client = info.find((item: any) => item.name === "Cliente");
  if (client) {
    data.client = client.value;
    info.splice(info.indexOf(client), 1);
  }
  const studio = info.find((item: any) => item.name === "Estudio");
  if (studio) {
    data.studio = studio.value;
    info.splice(info.indexOf(studio), 1);
  }
  const project = info.find((item: any) =>
    item.name === "Proxecto" || item.name === "Proyecto"
  );
  if (project) {
    if (data.title === project.value) {
      info.splice(info.indexOf(project), 1);
    }
  }

  if (info.length === 0) {
    delete data.info;
  }

  Deno.writeTextFileSync(file.path, stringify(data));
}
