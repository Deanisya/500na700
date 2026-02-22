import { NewItems } from "@/types/news";

const API_DELAY_MS = 500;

function getDataUrl(): string {
  if (typeof window !== "undefined") return "/data/news.json";
  const base = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  return `${base}/data/news.json`;
}

export async function fetchNews(): Promise<NewItems[]> {
  await new Promise((resolve) => setTimeout(resolve, API_DELAY_MS));
  const res = await fetch(getDataUrl());
  if (!res.ok) throw new Error("Ошибка загрузки новостей");
  return res.json();
}

export async function getNewsById(id: string): Promise<NewItems | undefined> {
  const news = await fetchNews();
  return news.find((item) => item.id === Number(id));
}
