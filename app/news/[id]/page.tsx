import { notFound } from "next/navigation";
import { getNewsById } from "@/fakeApi/news";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NewsPage({ params }: Props) {
  const { id } = await params;
  const news = await getNewsById(id);

  if (!news) notFound();

  return (
    <main className="min-h-screen p-8">
      <h1>{news.title}</h1>
      <p>{news.date}</p>
      <p>{news.description}</p>
      {news.detailedDescription && <p>{news.detailedDescription}</p>}
    </main>
  );
}
