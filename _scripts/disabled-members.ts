import { expandGlob } from "jsr:@std/fs/expand-glob";
import { parse } from "jsr:@std/yaml/parse";

const ids = new Set<number>();

const avatars = new Set<string>();
const covers = new Set<string>();
const images = new Set<string>();

for await (const file of expandGlob("./socios/*.yml")) {
  if (file.name.startsWith("_")) continue; // Skip files starting with underscore

  const content = await Deno.readTextFile(file.path);
  const data = parse(content) as any;
  if (!data.draft) {
    continue;
  }

  Deno.rename(file.path, file.path.replace("socios/", "socios/_disabled/"));
}

for await (const file of expandGlob("./socios/_disabled/*.yml")) {
  if (file.name.startsWith("_")) continue; // Skip files starting with underscore

  const content = await Deno.readTextFile(file.path);
  const data = parse(content) as any;
  ids.add(data.id);
  avatars.add(data.avatar);
}

for await (const file of expandGlob("./portfolio/*.yml")) {
  if (file.name.startsWith("_")) continue; // Skip files starting with underscore

  const content = await Deno.readTextFile(file.path);
  const data = parse(content) as any;

  if (data.members_id.some((id: number) => !ids.has(id))) {
    continue;
  }

  Deno.rename(
    file.path,
    file.path.replace("portfolio/", "portfolio/_disabled/"),
  );
}

for await (const file of expandGlob("./portfolio/_disabled/*.yml")) {
  if (file.name.startsWith("_")) continue; // Skip files starting with underscore

  const content = await Deno.readTextFile(file.path);
  const data = parse(content) as any;

  ids.add(data.id);
  if (data.cover) {
    covers.add(data.cover);
  }
  for (const block of data.body) {
    if (block.image) {
      images.add(block.image);
    }
  }
}

for (const img of avatars) {
  const dest = img.replace("avatars/", "avatars/_disabled/");
  try {
    await Deno.rename(`.${img}`, `.${dest}`);
  } catch {}
}

for (const img of covers) {
  const dest = img.replace("portfolio/covers/", "portfolio/covers/_disabled/");
  try {
    await Deno.rename(`.${img}`, `.${dest}`);
  } catch {}
}

for (const img of images) {
  const dest = img.replace("portfolio/images/", "portfolio/images/_disabled/");
  try {
    await Deno.rename(`.${img}`, `.${dest}`);
  } catch {}
}
