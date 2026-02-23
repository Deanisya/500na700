import { NewItems } from "@/types/news";
import Image from "next/image";
import s from "./DetailsNews.module.scss";

export default function DetailsNews({ news }: { news: NewItems }) {
  return (
    <article className={s.article}>
      <div className={s.imageWrap}>
        <Image src={news.image} alt={news.title} fill className={s.image} />
      </div>
      <div className={s.description}>
        <h1 className={s.title}>{news.title}</h1>
        <div className={s.descriptionSmall}>
          <p className={s.date}>{news.date}</p>
          <h3 className={s.subtitle}>{news.subtitle}</h3>
          {news.detailedDescription && (
            <p className={s.detailedDescription}>{news.detailedDescription}</p>
          )}
        </div>
      </div>
    </article>
  );
}
