import { expandGlob } from "jsr:@std/fs/expand-glob";
import { parse } from "jsr:@std/yaml/parse";
import { stringify } from "jsr:@std/yaml/stringify";

for await (const file of expandGlob("./socios/*.yml")) {
  if (file.name.startsWith("_")) continue; // Skip files starting with underscore

  const content = await Deno.readTextFile(file.path);
  const data = parse(content) as any;
  const { links } = data;

  for (const link of links) {
    if (link.text === "Behance") {
      delete link.text;
      link.type = "behance";
    }
    if (link.text === "Instagram") {
      delete link.text;
      link.type = "instagram";
    }
    if (link.text === "Facebook") {
      delete link.text;
      link.type = "facebook";
    }
    if (link.text === "Threads") {
      delete link.text;
      link.type = "threads";
    }
    if (link.text === "Youtube") {
      delete link.text;
      link.type = "youtube";
    }
    if (link.text === "Pinterest") {
      delete link.text;
      link.type = "pinterest";
    }
    if (link.text === "Github") {
      delete link.text;
      link.type = "github";
    }
    if (link.text?.trim() === "Linkedin") {
      delete link.text;
      link.type = "linkedin";
    }
    if (link.text?.trim() === "Spotify") {
      delete link.text;
      link.type = "spotify";
    }
    if (link.text === "Tumblr") {
      delete link.text;
      link.type = "tumblr";
    }
    if (link.type === "linkedin" || link.type === "facebook") {
      delete link.text;
    }
    if (link.text === "X" || link.text?.trim() === "Twitter") {
      delete link.text;
      link.url = link.url.replace("twitter.com", "x.com");
      link.type = "x";
    }
  }

  Deno.writeTextFileSync(file.path, stringify(data));
}
