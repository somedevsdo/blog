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
  const { category, date, id, title } = post;
  return (
    <Link href={`/post/${id}`}>
      <div className={styles.card}>
        <a>
          <div className={styles.header}>
            <ImageWithPlaceholder
              height={200}
              objectFit="cover"
              src="/posts/featured/test.jpg"
              width={600}
            />
          </div>
          <div className={styles.details}>
            <span className={styles.postDetails}>
              <p className={styles.category}>{category}</p> -{" "}
              <p className={styles.date}>{getDateFormatted(date)}</p>
            </span>
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, recusandae.
            </p>
            <div className={styles.author}>
              <Avatar size="x-small" src="/authors/benmatselby.jpg" />
              <div className={styles.authorDetails}>
                <strong>Ben Selby</strong>
                <p>Senior</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </Link>
  );
};

export default Card;
