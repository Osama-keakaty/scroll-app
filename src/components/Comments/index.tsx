import { useInfiniteScroll } from "@Hooks/useInfiniteScroll";
import { useComments } from "@Hooks/useComments";
import { Skeleton } from 'antd';
import { FetchDataStatus } from "@Enums/FetchDataStatus";

export const CommentsSection = ({ imageId }: { imageId?: string }) => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useComments(imageId);

    const { ref: commentsEndRef } = useInfiniteScroll(
        fetchNextPage,
        hasNextPage
    );

    if (status === FetchDataStatus.PENDING) return (
        <div className="flex flex-col gap-2">
            {Array.from({ length: 5 }).map((_, index) => <Skeleton.Input key={index} className="!w-full !h-4" />)}

        </div>
    );
    if (status === FetchDataStatus.ERROR) return <div>Error loading comments</div>;

    return (
        <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {data?.pages.map((page) =>
                page.map((comment) => (
                    <div key={comment.id} className="flex gap-3 p-2">
                        <img
                            src={comment.user.profile_image.small}
                            className="w-8 h-8 rounded-full"
                            alt={comment.user.name}
                        />
                        <div>
                            <p className="font-medium">{comment.user.name}</p>
                            <p>{comment.content}</p>
                        </div>
                    </div>
                ))
            )
            }
            <div ref={commentsEndRef} className="h-10 flex justify-center">
                {isFetchingNextPage && Array.from({ length: 5 }).map((_, index) => <Skeleton.Input key={index} className="!w-full !h-4" />)
                }
            </div>
        </div>
    );
};