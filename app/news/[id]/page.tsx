import { notFound } from "next/navigation";
import { getNewsById } from "@/fakeApi/news";
import DetailsNews from "@/components/DetailsNews/DetailsNews";
import Footer from "@/components/Footer/Footer";

type Props = {
  params: Promise<{ id: string }>;
}; // id — строка из URL

export default async function NewsPage({ params }: Props) {
  const { id } = await params;
  const news = await getNewsById(id);

  if (!news) notFound();

  return (
    <>
      <main className="container">
        <DetailsNews news={news} />
      </main>
      <Footer />
    </>
  );
}
