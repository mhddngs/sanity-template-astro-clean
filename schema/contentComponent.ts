import { defineType, defineArrayMember } from "sanity";
import galleryComponent from "./galleryComponent";
import { arrayOfObjects } from "./custom-array";

export default defineType({
  title: "Content",
  name: "contentComponent",
  type: "array",
  of: [
    { type: "block", name: "content" },
    { type: "galleryComponent", name: "thing" },
    { type: "arrayOfObjects", name: "test" },
  ],
});
