import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useInfiniteScroll = (fetchNextPage: () => void, hasNextPage?: boolean) => {
  
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '200px', 
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return { ref };
};