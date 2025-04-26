
import { useGetImages } from "@Hooks/useGetImages";
import { useInfiniteScroll } from "@Hooks/useInfiniteScroll";
import { useRef, useEffect } from 'react';
import { useLoadingImage } from "@Hooks/useLoadingImage";
import { useImageSelection } from "@Hooks/useImageSelection";
import { useAppStore } from "@Stores/AppStore";


export const useImagesContainer = () => {
    const { searchBoxValue } = useAppStore();
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        error,
        status
    } = useGetImages(searchBoxValue);


    const { loadedPages, loadedImages, handleImageLoad, setLoadedPages } = useLoadingImage();
    const { open, setOpen, onImageClickedHandler } = useImageSelection();

    const currentPageRef = useRef(1);

    const canFetchNextPage = hasNextPage && (!data?.pages.length || loadedPages.has(currentPageRef.current));

    const { ref } = useInfiniteScroll(
        () => {
            if (canFetchNextPage) {
                currentPageRef.current += 1;
                fetchNextPage();
            }
        },
        canFetchNextPage
    );

    useEffect(() => {
        if (data?.pages.length === 1) {
            currentPageRef.current = 1;
            setLoadedPages(new Set());
        }
    }, [data?.pages.length]);

    return {
        error,
        setOpen,
        open,
        loadedImages,
        data,
        hasNextPage,
        isFetchingNextPage,
        ref,
        handleImageLoad,
        status,
        onImageClickedHandler
    };
};