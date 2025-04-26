import { fetchData } from "@Services/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { InfiniteData } from "@tanstack/react-query";
import { fetchedImage } from "@Types/fetchedImage.types";

const PER_PAGE = 30;

export const useGetImages = (searchQuery?: string) => {
  return useInfiniteQuery<fetchedImage[], Error, InfiniteData<fetchedImage[]>,
    ['photos', string | undefined], number>({
      queryKey: ['photos', searchQuery],
      queryFn: async ({ pageParam = 1 }) => {
        const endpoint = searchQuery
          ? `/search/photos?query=${searchQuery}&page=${pageParam}&per_page=${PER_PAGE}`
          : `/photos?page=${pageParam}&per_page=${PER_PAGE}`;

        const response = await fetchData<fetchedImage[] | { results: fetchedImage[] }>(endpoint);

        return searchQuery ? (response as { results: fetchedImage[] }).results : response as fetchedImage[];
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === PER_PAGE ? allPages.length + 1 : undefined;
      },
      enabled: !!searchQuery || true,
    });
};