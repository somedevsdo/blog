import Link from "next/link";
import { IAuthor } from "../../lib/authors";
import Avatar from "../Avatar/Avatar";
import styles from "./Author.module.scss";

/**
 * The size of the author component. Closely links to AvatarSize at the moment.
 */
type AuthorSize = "x-small" | "small" | "medium" | "large";

/**
 * When we render the author what color scheme are we wanting to adopt.
 */
type TextTheme = "default" | "dark" | "light";

/**
 * The props required to render an Author component.
 */
interface IAuthorProps {
  /**
   * The author to render.
   */
  author: IAuthor;

  /**
   * The size of the Author.
   */
  avatarSize: AuthorSize;

  /**
   * Optionally hard define the theme of the text
   */
  textTheme?: TextTheme;

  /**
   * If the layout should be vertical
   */
  vertical?: boolean;
}

/**
 * Responsible for rendering an Author.
 *
 * @param props The props required to render the component.
 * @returns The Author component.
 */
const Author = (props: IAuthorProps): JSX.Element => {
  const { author, avatarSize, textTheme, vertical } = props;

  let flow = styles.horizontal;
  if (vertical) {
    flow = styles.vertical;
  }

  let scheme = "";
  if (textTheme === "dark") {
    scheme = styles.dark;
  }
  if (textTheme === "light") {
    scheme = styles.light;
  }

  return (
    <div className={flow} title={`Author profile for ${author.name}`}>
      <Avatar size={avatarSize} src={author.profile} />
      <p className={`${styles.name} ${scheme}`}>
        by{" "}
        <strong>
          <Link href={`/author/${author.id}`}>{author.name}</Link>
        </strong>
      </p>
    </div>
  );
};

Author.defaultProps = {
  textTheme: "default",
  vertical: false,
};

export default Author;
