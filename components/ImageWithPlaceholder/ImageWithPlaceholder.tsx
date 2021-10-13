import Image from "next/image";
import type { ImageProps } from "next/image";
import { getPlaceholder } from "../../lib/placeholders";

type Props = Omit<ImageProps, "blurDataURL" | "placeholder" | "src"> & {
  src: string;
};

const ImageWithPlaceholder = (props: Props): JSX.Element => {
  const { alt, src } = props;
  const placeholder = getPlaceholder(src);

  return (
    <Image
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      alt={alt}
      blurDataURL={placeholder}
      placeholder="blur"
    />
  );
};

export default ImageWithPlaceholder;
