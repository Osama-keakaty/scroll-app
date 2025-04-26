import { fetchData } from "@Services/api";
import {
    useQuery,
} from "@tanstack/react-query";
import { fetchedImage } from "@Types/fetchedImage.types";

export const useGetOneImage = (imageId?: string) => {
    const getOneImage = useQuery({
        queryKey: ["getOneImage", imageId],
        queryFn: async () => {
            const response = await fetchData<fetchedImage>(`/photos/${imageId}`);
            return response;
        },
        enabled: !!imageId
    });

    return {
        getOneImage
    }
};

