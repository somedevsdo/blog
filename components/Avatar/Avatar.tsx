import ImageWithPlaceholder from "../ImageWithPlaceholder/ImageWithPlaceholder";
import styles from "./Avatar.module.scss";

type AvatarSize = "x-small" | "small" | "medium" | "large";

interface IAvatarProps {
  /**
   * Has border
   */
  border?: boolean;

  /**
   * The size of the Avatar
   */
  size?: AvatarSize;

  /**
   * The image source
   */
  src: string;
}

/**
 * The Avatar component
 *
 * @param props the Avatar props
 * @returns the Avatar component
 */
const Avatar = (props: IAvatarProps): JSX.Element => {
  const { border, size, src } = props;
  let avatarSize: string;

  switch (size) {
    case "x-small":
      avatarSize = "40px";
      break;
    case "small":
      avatarSize = "52px";
      break;
    case "medium":
      avatarSize = "77px";
      break;
    case "large":
    default:
      avatarSize = "152px";
      break;
  }

  return (
    <span
      className={`${styles.avatar} ${border && styles.avatarBorder}`}
      style={{ height: avatarSize, width: avatarSize }}
    >
      <ImageWithPlaceholder
        alt="Avatar"
        height={avatarSize}
        layout="fixed"
        objectFit="contain"
        src={src}
        title="Avatar"
        width={avatarSize}
      />
    </span>
  );
};

Avatar.defaultProps = {
  border: false,
  size: "large",
};

export default Avatar;
