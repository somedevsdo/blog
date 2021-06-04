import Link from "next/link";
import { IAuthor } from "../../lib/authors";
import Avatar from "../Avatar/Avatar";
import styles from "./Author.module.scss";

/**
 * The size of the author component. Closely links to AvatarSize at the moment.
 */
type AuthorSize = "x-small" | "small" | "medium" | "large";

/**
 * How to layout the component.
 */
type Layout = "horizontal" | "vertical";

/**
 * When we render the author what color scheme are we wanting to adopt.
 */
type ColorScheme = "dark" | "light";

/**
 * The props required to render an Author component.
 */
interface IAuthorProps {
  /**
   * The author to render.
   */
  author: IAuthor;

  /**
   * Whether the avatar should have a border.
   */
  avatarBorder: boolean;

  /**
   * The size of the Author.
   */
  avatarSize: AuthorSize;

  /**
   * The color scheme we should adopt when rendering the component.
   */
  colorScheme: ColorScheme;

  /**
   * How to layout the component.
   */
  layout: Layout;
}

/**
 * Responsible for rendering an Author.
 *
 * @param props The props required to render the component.
 * @returns The Author component.
 */
const Author = (props: IAuthorProps): JSX.Element => {
  const { author, avatarBorder, avatarSize, colorScheme, layout } = props;

  let flow = styles.horizontal;
  if (layout === "vertical") {
    flow = styles.vertical;
  }

  let scheme = styles.light;
  if (colorScheme === "dark") {
    scheme = styles.dark;
  }

  return (
    <div
      className={`${styles.author} ${flow} ${scheme}`}
      title={`Author profile for ${author.name}`}
    >
      <Avatar border={avatarBorder} size={avatarSize} src={author.profile} />
      <p className={styles.name}>
        by{" "}
        <strong>
          <Link href={`/author/${author.id}`}>{author.name}</Link>
        </strong>
      </p>
    </div>
  );
};

export default Author;
