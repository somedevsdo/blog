import Image, { ImageProps } from "next/image";
import { SyntheticEvent, useState } from "react";
import { getPlaceholder } from "../../lib/placeholders";
import styles from "./ImageWithPlaceholder.module.scss";

const ImageWithPlaceholder = (props: ImageProps): JSX.Element => {
  const { alt, objectFit, src } = props;
  const [loaded, setLoaded] = useState(false);

  const placeholder = getPlaceholder(src);

  return (
    <>
      <img
        alt={`${alt} placeholder`}
        aria-hidden="true"
        src={placeholder}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          objectFit,
          filter: "blur(2rem)",
          height: "100%",
          width: "100%",
        }}
      />
      <Image
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        className={`${styles.img} ${loaded ? styles.loaded : ""}`}
        onLoad={(e: SyntheticEvent<HTMLImageElement>): void => {
          if (!(e.target as HTMLImageElement).src.includes("data:image/gif;base64")) {
            setLoaded(true);
          }
        }}
      />
    </>
  );
};

export default ImageWithPlaceholder;
