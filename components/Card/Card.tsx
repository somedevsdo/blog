import Link from "next/link";
import getDateFormatted from "../../lib/date";
import { IPost } from "../../lib/posts";
import Avatar from "../Avatar/Avatar";
import ImageWithPlaceholder from "../ImageWithPlaceholder/ImageWithPlaceholder";
import styles from "./Card.module.scss";

interface ICardProps {
  post: IPost;
}

const Card = (props: ICardProps): JSX.Element => {
  const { post } = props;
  const { authorProfile, category, date, featuredImage, id, subtitle, title } = post;
  return (
    <>
      <Link href={`/post/${id}`}>
        <a className={styles.link} title={title}>
          <div className={styles.container}>
            <div className={styles.image}>
              <ImageWithPlaceholder
                alt={title}
                layout="fill"
                objectFit="cover"
                src={`/posts/featured/${featuredImage}`}
              />
            </div>
            <div className={styles.content}>
              <span className={styles.meta}>
                <span className={styles.category}>{category}</span> {" - "}
                <span>{getDateFormatted(date)}</span>
              </span>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.subtitle}>{subtitle}...</p>
              <div className={styles.author}>
                <Avatar size="x-small" src={authorProfile.profile} />
                <div>
                  <div className={styles.name}>{authorProfile.name}</div>
                  <div className={styles.role}>UI Developer</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Card;
