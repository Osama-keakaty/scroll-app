import { useState } from 'react';
import { fetchedImage } from "@Types/fetchedImage.types";
import { useAppStore } from '@Stores/AppStore';

export const useImageSelection = () => {
    const { setSelectedImage } = useAppStore()
    const [open, setOpen] = useState(false)

    const onImageClickedHandler = (img: fetchedImage) => {
        setOpen(true);
        setSelectedImage(img);
    };

    return { open, setOpen, onImageClickedHandler };
};
