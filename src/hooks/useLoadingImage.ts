import { useState } from 'react';

export const useLoadingImage = () => {
    const [loadedPages, setLoadedPages] = useState<Set<number>>(new Set());
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
    
    const handleImageLoad = (id: string, pageIndex: number, currentPageImages?: any[]) => {
        setLoadedImages(prev => {
            const newSet = new Set(prev).add(id);
            const imagesFromThisPage = currentPageImages || [];
            const allLoaded = imagesFromThisPage.every(img => newSet.has(img.id));
            if (allLoaded) {
                setLoadedPages(prevPages => new Set(prevPages).add(pageIndex + 1));
            }
            return newSet;
        });
    };

    return { loadedPages, loadedImages, handleImageLoad,setLoadedPages };
};