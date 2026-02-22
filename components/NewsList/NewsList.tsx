"use client";

import { useNews } from "@/hooks/useNews";
import NewsCard from "../NewsCard/NewsCard";
import s from "./NewList.module.scss";

export default function NewsList() {
  const { data, loading, error } = useNews();

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;
  if (!data?.length) return <p>Новостей пока нет</p>;
  return (
    <>
      <h1 className={s.title}>Новости</h1>
      <ul className={s.grid}>
        {data?.map((item) => (
          <li key={item.id}>
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
