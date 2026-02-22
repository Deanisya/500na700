import { NewItems } from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import s from "./NewsCard.module.scss";

export default function NewsCard({ item }: { item: NewItems }) {
  const { id, image, title, description, date } = item;

  return (
    <Link href={`/news/${id}`} className={s.cardLink}>
      <article>
        <div className={s.imageWrap}>
          <Image src={image} alt={title} fill className={s.image} />
        </div>
        <h2 className={s.title}>{title}</h2>
        <p className={s.description}>{description}</p>
        <span className={s.date}>{date}</span>
      </article>
    </Link>
  );
}
