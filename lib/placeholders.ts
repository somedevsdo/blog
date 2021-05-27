import placeholders from "../public/placeholders.json";

interface IPlaceholder {
  file: string;
  placeholder: string;
}

const getPlaceholder = (src: string): string => {
  const placeholder: IPlaceholder[] = placeholders.filter((p: IPlaceholder) =>
    p.file.endsWith(src)
  );
  return placeholder.length > 0 ? placeholder[0].placeholder : placeholders[0].placeholder;
};

export default getPlaceholder;
