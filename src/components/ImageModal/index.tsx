import { MainModal } from "@Components/Modal"
import { fetchedImage } from "@Types/fetchedImage.types"
import ShareImage from "@Assets/svg/share-icon.svg"

type PropsTypes = {
    img: fetchedImage | null,
    setOpen: (value: boolean) => void,
    open: boolean
}
export const ImageModal = ({ img, setOpen, open }: PropsTypes) => {
    const href = location.href;
    const handleShare = async () => {
        try {
            await navigator.share({
                title: 'QRMTS',
                text: 'Check out this QR code builder',
                url: href + 'image/' + img?.id,
            });
        } catch (err) {
            console.log('Something gets wrong');
        }
    };
    return (
        <MainModal open={open} setOpen={setOpen}>
            <div className="flex w-full justify-center flex-col">
                <img src={img?.urls.regular}
                    srcSet={`${img?.urls.small} 300w, ${img?.urls.regular} 600w`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-100 object-cover py-5 "
                    alt=""
                    loading="lazy" />
                <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                        <span className="font-bold">{img?.user.first_name} {img?.user.last_name}</span>
                        <span>{img?.alt_description}</span>
                    </div>
                    <img src={ShareImage} title="Share" className="w-7 h-7 cursor-pointer" alt="" onClick={handleShare} />
                </div>
            </div>
            {/* <CommentsSection imageId={img?.id} /> */}
        </MainModal>
    )
} 