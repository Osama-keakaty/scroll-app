import { Modal } from "antd"

type PropsTypes = {
    open: boolean,
    setOpen: (value: boolean) => void,
    children: React.ReactNode
}
export const MainModal = ({ open, setOpen, children }: PropsTypes) => {
    return (
        <Modal
            open={open}
            footer={null}
            onCancel={() => setOpen(false)}
            centered
            className='border-2 border-primary-main rounded-[10px]'
            closeIcon={false}
            closable={false}
            
            >
            {children}
        </Modal>
    )
}