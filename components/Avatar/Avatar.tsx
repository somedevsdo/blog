import ImageWithPlaceholder from "../ImageWithPlaceholder/ImageWithPlaceholder";
import styles from "./Avatar.module.scss";

type AvatarSize = "x-small" | "small" | "medium" | "large" | "x-large";

interface IAvatarProps {
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
  const { size, src } = props;
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
    case "x-large":
      avatarSize = "180px";
      break;
    case "large":
    default:
      avatarSize = "120px";
      break;
  }

  return (
    <span className={styles.avatar} style={{ height: avatarSize, width: avatarSize }}>
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
  size: "large",
};

export default Avatar;
