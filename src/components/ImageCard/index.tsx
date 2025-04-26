import { fetchedImage } from "@Types/fetchedImage.types";
import { Skeleton } from "antd";

type PropsTypes = {
    img: fetchedImage;
    pageIndex: number;
    loadedImages: Set<string>;
    handleImageLoad: (id: string, pageIndex: number) => void;
    onImageClickedHandler: (img: fetchedImage) => void;
};

export const ImageCard = ({
    img,
    pageIndex,
    loadedImages,
    handleImageLoad,
    onImageClickedHandler
}: PropsTypes) => {
    return (
        <div className="relative">
            {!loadedImages.has(img.id) && (
                <Skeleton.Image
                    active
                    className="!w-full !h-70 !rounded-lg "
                    style={{ width: '100%', height: '100%' }}
                />
            )}
            <img
                src={img.urls.regular}
                className={`h-70 !w-full rounded-lg cursor-pointer object-cover  hover:scale-105 transition-all duration-200 ${!loadedImages.has(img.id) ? 'opacity-0 absolute' : 'opacity-100'
                    }`}
                loading="lazy"
                alt="Unsplash image"
                srcSet={`${img?.urls.small} 300w, ${img?.urls.regular} 600w`}
                sizes="(max-width: 768px) 100vw, 50vw"
                onLoad={() => handleImageLoad(img.id, pageIndex)}
                onClick={() => onImageClickedHandler(img)}
            />
        </div>
    );
};