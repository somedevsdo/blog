import Image from "next/image";
import styles from "./Avatar.module.scss";

type AvatarSize = "x-small" | "small" | "large";

interface IAvatarProps {
  size?: AvatarSize;
}

/**
 * The Avatar component
 *
 * @param props the Avatar props
 * @returns the Avatar component
 */
const Avatar = (props: IAvatarProps): JSX.Element => {
  const { size } = props;
  let avatarSize: string;

  switch (size) {
    case "x-small":
      avatarSize = "40px";
      break;
    case "small":
      avatarSize = "52px";
      break;
    case "large":
    default:
      avatarSize = "152px";
      break;
  }

  return (
    <span className={styles.avatar}>
      <Image
        alt="Profile picture of Gillian Kent"
        height={avatarSize}
        layout="fixed"
        objectFit="contain"
        src="/authors/benmatselby.jpg"
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
