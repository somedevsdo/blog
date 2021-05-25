import Avatar from "../Avatar/Avatar";
import styles from "./Subheader.module.scss";

const Subheader = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.subheader}>
        <p>← ALL POSTS</p>
        <p>Icons go here</p>
      </div>
      <div className={styles.avatar}>
        <Avatar border size="medium" src="/authors/benmatselby.jpg" />
        <p className={styles.author}>
          by <strong>Ben Selby</strong>
        </p>
      </div>
    </div>
  );
};

export default Subheader;
