import { convert } from "url-slug";

export const slugify = (value: string) => {
  return convert(value, {
    dictionary: {
      "'": "",
    },
  });
};
