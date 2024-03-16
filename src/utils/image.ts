import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";
import { useSanityClient } from "@sanity/astro";

const sanityClient = useSanityClient();
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: Image) {
  return builder.image(source);
}
