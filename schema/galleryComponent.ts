import { defineType, defineArrayMember } from "sanity";
import { MyPreviewComponent } from "./custom-array";

export default defineType({
  title: "Gallery",
  name: "galleryComponent",
  type: "object",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      images: "images",
    },
  },
  components: {
    preview: MyPreviewComponent,
  },
});
