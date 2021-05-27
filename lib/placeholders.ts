import placeholders from "../public/placeholders.json";

interface IPlaceholder {
  file: string;
  placeholder: string;
  size: { height: number; width: number };
}

const getPlaceholderObject = (src: string): IPlaceholder => {
  const placeholder: IPlaceholder[] = placeholders.filter((p: IPlaceholder) =>
    p.file.endsWith(src)
  );
  return placeholder[0];
};

const getPlaceholder = (src: string): string => {
  const placeholder = getPlaceholderObject(src);
  return placeholder.placeholder;
};

const getSize = (src: string): { height: number; width: number } => {
  const placeholder = getPlaceholderObject(src);
  return placeholder.size;
};

export { getPlaceholder, getSize };
