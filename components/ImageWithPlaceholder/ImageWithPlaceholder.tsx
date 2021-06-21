import Image from "next/image";
import type { ImageProps } from "next/image";
import { getPlaceholder } from "../../lib/placeholders";

type Props = Omit<ImageProps, "blurDataURL" | "placeholder" | "src"> & {
  src: string;
};

const ImageWithPlaceholder = (props: Props): JSX.Element => {
  const { src } = props;
  const placeholder = getPlaceholder(src);

  return (
    // @ts-expect-error - this is valid but keeps failing the type-checking
    <Image
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      blurDataURL={placeholder}
      placeholder="blur"
    />
  );
};

export default ImageWithPlaceholder;
