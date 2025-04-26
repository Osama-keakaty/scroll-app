import { FetchDataStatus } from '@Enums/FetchDataStatus';
import { LoadingSpinner } from '@Components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import { useGetOneImage } from '@Hooks/useGetOneImage';
import { PageNotFound } from '@Pages/PageNotFound';

export default function Image() {
    const { id } = useParams()
    const { getOneImage } = useGetOneImage(id)
    const { status, data } = getOneImage
    if (status === FetchDataStatus.PENDING) return (<LoadingSpinner />);
    if (status === FetchDataStatus.ERROR) return (<PageNotFound />);

    return (
        <div className='flex w-full h-screen p-10 justify-center'>
            <div className="flex flex-col h-fit bg-white rounded-2xl p-3 transition-all duration-100 sm:p-10">
                <img src={data?.urls.regular}
                    srcSet={`${data?.urls.small} 300w, ${data?.urls.regular} 600w`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-100 h-100 object-cover py-5 "
                    alt=""
                    loading="lazy" />
                <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                        <span className="font-bold">{data?.user.first_name} {data?.user.last_name}</span>
                        <span>{data?.alt_description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};