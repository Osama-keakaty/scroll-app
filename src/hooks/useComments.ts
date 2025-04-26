import { fetchData } from "@Services/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { InfiniteData } from "@tanstack/react-query";
import { Comment } from "@Types/comments.types";

const COMMENTS_PER_PAGE = 10;

export const useComments = (imageId?: string) => {
    return useInfiniteQuery<Comment[], Error, InfiniteData<Comment[]>,
        ['comments', string | undefined], number>({
            queryKey: ['comments', imageId],
            queryFn: async ({ pageParam = 1 }) => {
                if (!imageId) return [];

                const response = await fetchData<Comment[]>(
                    `/photos/${imageId}/comments?page=${pageParam}&per_page=${COMMENTS_PER_PAGE}`
                );

                return response;
            },
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) => {
                return lastPage.length === COMMENTS_PER_PAGE ? allPages.length + 1 : undefined;
            },
            enabled: !!imageId,
        });
};