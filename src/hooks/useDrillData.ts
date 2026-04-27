import { useQuery } from "@tanstack/react-query";

export const useDrillData = (level: number, parentId: number | null) => {
  const api = [
    "https://jsonplaceholder.typicode.com/users",
    `https://jsonplaceholder.typicode.com/posts?userId=${parentId}`,
    `https://jsonplaceholder.typicode.com/comments?postId=${parentId}`
  ];

  return useQuery({
    queryKey: ["drill", level, parentId],
    queryFn: async () => {
      const r = await fetch(api[level]);
      if (!r.ok) throw new Error("Failed to fetch");
      return r.json();
    },
    staleTime: 600000,
  });
};