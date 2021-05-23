import Image from "next/image";
import styles from "./Avatar.module.scss";

const Avatar = () => {
  return (
    <span className={styles.avatar}>
      <Image
        alt="Profile picture of Gillian Kent"
        height="152px"
        layout="fixed"
        objectFit="contain"
        src="/authors/benmatselby.jpg"
        title="Avatar"
        width="152px"
      />
    </span>
  );
};

export default Avatar;
