import React, { ImgHTMLAttributes } from "react";
import ImageWithPlaceholder from "../ImageWithPlaceholder/ImageWithPlaceholder";
import { getSize } from "../../lib/placeholders";

const Img = (props: ImgHTMLAttributes<HTMLImageElement>): JSX.Element => {
  const { alt, src } = props;
  const size = getSize(src);
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <ImageWithPlaceholder
        alt={alt}
        height={size.height}
        layout="responsive"
        objectFit="contain"
        src={src}
        width={size.width}
      />
    </div>
  );
};

export default Img;
