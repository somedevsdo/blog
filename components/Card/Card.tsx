import Link from "next/link";
import getDateFormatted from "../../lib/date";
import { IPost } from "../../lib/posts";
import Author from "../Author/Author";
import ImageWithPlaceholder from "../ImageWithPlaceholder/ImageWithPlaceholder";
import styles from "./Card.module.scss";

interface ICardProps {
  post: IPost;
}

const Card = (props: ICardProps): JSX.Element => {
  const { post } = props;
  const { authorProfile, category, date, featuredImage, id, subtitle, title } = post;
  return (
    <Link href={`/post/${id}`}>
      <a className={styles.link}>
        <div className={styles.card}>
          <div className={styles.header}>
            <ImageWithPlaceholder
              layout="fill"
              objectFit="cover"
              src={`/posts/featured/${featuredImage}`}
            />
          </div>
          <div className={styles.details}>
            <span className={styles.postDetails}>
              <p className={styles.category}>{category}</p> {" - "}
              <p className={styles.date}>{getDateFormatted(date)}</p>
            </span>
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.author}>
              <Author
                author={authorProfile}
                avatarBorder={false}
                avatarSize="x-small"
                colorScheme="light"
                layout="horizontal"
              />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
