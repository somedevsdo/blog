import Link from "next/link";
import styles from "./SocialLink.module.scss";

/**
 * The props needed to render the social link.
 */
interface ISocialLinkProps {
  /**
   * The social media link.
   */
  link: string;
}

/**
 * Social link takes a URL and then renders the link as a clickable icon.
 *
 * @param props ISocialLinkProps The props required to render the component.
 * @returns The social media link.
 */
const SocialLink = (props: ISocialLinkProps): JSX.Element => {
  const { link } = props;

  let title = "";
  let icon = "";
  if (link.includes("twitter.com")) {
    icon = "Twitter";
    title = "Twitter";
  } else if (link.includes("github.com")) {
    icon = "GitHub";
    title = "GitHub";
  } else if (link.includes("dev.to")) {
    icon = "Dev.to";
    title = "Dev.to";
  } else {
    icon = "Link";
    title = "Web";
  }
  return (
    <span className={styles.sociallink} title={`${title} link`}>
      <Link href={link}>{icon}</Link>
    </span>
  );
};

export default SocialLink;
