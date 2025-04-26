import { Spin } from 'antd';
import { ImageModal } from "@Components/ImageModal";
import { useImagesContainer } from '@Hooks/useImagesContainer';
import { useAppStore } from '@Stores/AppStore';
import { ImageCard } from '@Components/ImageCard';
import { FetchDataStatus } from '@Enums/FetchDataStatus';
import { LoadingSpinner } from '@Components/LoadingSpinner';
import NoData from '@Components/NoData';

export default function Home() {
    const {
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
    } = useImagesContainer()

    const { selectedImage } = useAppStore()

    if (status === FetchDataStatus.PENDING) return (<LoadingSpinner />);

    if (status === FetchDataStatus.ERROR) return (<LoadingSpinner />);

    if (data?.pages[0].length === 0) return (<NoData />)

    return (
        <>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 transition-all duration-100">
                {data?.pages.map((page, pageIndex) => (
                    page.map((img) => (
                        <ImageCard
                            key={img.id}
                            img={img}
                            pageIndex={pageIndex}
                            loadedImages={loadedImages}
                            handleImageLoad={handleImageLoad}
                            onImageClickedHandler={onImageClickedHandler}
                        />
                    ))
                ))}
            </div>
            <div ref={ref} className="w-full py-8 flex justify-center">
                {(isFetchingNextPage || hasNextPage && !error) && <Spin size="large" className="[&_.ant-spin-dot-item]:!bg-primary-main" />}
            </div>
            <ImageModal setOpen={setOpen} open={open} img={selectedImage} />
        </>
    );
};