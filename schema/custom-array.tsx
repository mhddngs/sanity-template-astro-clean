import { defineField } from "sanity";
import { Stack, Flex } from "@sanity/ui";
import { urlFor } from "../src/utils/image";

export function MyPreviewComponent(props: any) {
  console.log(props);
  const { images, schemaType } = props;
  const schemaTitle = schemaType.title;

  const modifiedProps = {
    ...props,
    title: `${schemaTitle}`,
  };

  console.log(urlFor(images[0]).url());
  return (
    <Stack space={1}>
      <>{props.renderDefault(modifiedProps)}</>
      <Flex>
        <></>
      </Flex>
    </Stack>
  );
}

export const arrayOfObjects = defineField({
  type: "object",
  name: "arrayOfObjects",
  title: "Array of objects",
  fields: [
    {
      name: "main",
      type: "array",
      of: [
        {
          type: "object",
          name: "myObject",
          title: "My object",
          fields: [
            {
              type: "string",
              name: "myString",
              title: "My string",
            },
            {
              type: "image",
              name: "myImage",
              title: "My image",
            },
          ],
        },
      ],
    },
  ],
});
