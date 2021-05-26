import Link from "next/link";
import { IAuthor } from "../../lib/authors";
import Avatar from "../Avatar/Avatar";
import styles from "./Subheader.module.scss";

/**
 * The props needed to render the Subheader.
 */
interface ISubheaderProps {
  /**
   * The author of the post.
   */
  author: IAuthor;
}

/**
 * The subheader component is responsible for displaying meta data
 * in a post.
 *
 * @param props ISubheaderProps - The props for the component.
 * @returns The subheader markup.
 */
const Subheader = (props: ISubheaderProps): JSX.Element => {
  const { author } = props;
  return (
    <div className={styles.container}>
      <div className={styles.subheader}>
        <p>← ALL POSTS</p>
        <p>Sharing links</p>
      </div>
      <div className={styles.avatar}>
        <Avatar border size="medium" src={author.profile} />
        <p className={styles.author}>
          by{" "}
          <strong>
            <Link href={`/author/${author.id}`}>{author.name}</Link>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Subheader;
