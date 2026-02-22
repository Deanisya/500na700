"use client";

import { fetchNews } from "@/fakeApi/news";
import { NewItems } from "@/types/news";
import { useEffect, useState } from "react";

export function useNews() {
  const [data, setData] = useState<NewItems[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false; //чтобы не обновлять состояние после размонтирования компонента

    fetchNews()
      .then((data) => {
        if (cancelled) return;
        setData(data);
      })
      .catch((error) => {
        if (cancelled) return;
        setError(error instanceof Error ? error : new Error(String(error)));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);
  return { data, loading, error };
}
