import ReactQueryProvider from "@Providers/ReactQuery";
const ProvidersContainer = ({ children }: { children: React.ReactNode }) => {

    return (
        <ReactQueryProvider>
            {children}
        </ReactQueryProvider>
    );
}
export default ProvidersContainer;