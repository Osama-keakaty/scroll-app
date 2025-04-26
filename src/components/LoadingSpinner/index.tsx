import { Spin } from "antd"

export const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Spin size="large" className="[&_.ant-spin-dot-item]:!bg-primary-main" />
        </div>
    )
}