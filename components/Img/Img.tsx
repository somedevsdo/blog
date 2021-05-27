import React, { ImgHTMLAttributes } from "react";
import ImageWithPlaceholder from "../ImageWithPlaceholder/ImageWithPlaceholder";

const Img = (props: ImgHTMLAttributes<HTMLImageElement>): JSX.Element => {
  const { alt, src } = props;
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <ImageWithPlaceholder alt={alt} height={300} layout="responsive" src={src} width={1024} />
    </div>
  );
};

export default Img;
