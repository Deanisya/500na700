"use client";

import { useNews } from "@/hooks/useNews";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "@/components/Preloader/Preloader";
import s from "./NewsList.module.scss";

export default function NewsList() {
  const { data, loading, error } = useNews();

  if (loading) return <Preloader />;
  if (error) return <p>Ошибка: {error.message}</p>;
  if (!data?.length) return <p>Новостей пока нет</p>;
  return (
    <>
      <h1 className={s.title}>Новости</h1>
      <ul className={s.grid}>
        {data.map((item) => (
          <li key={item.id}>
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
