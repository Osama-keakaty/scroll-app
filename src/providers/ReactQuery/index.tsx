import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultError } from '@tanstack/react-query';
const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1000,
                gcTime: 10 * 60 * 1000,
                refetchOnWindowFocus: false,
                retry: (failureCount, error: DefaultError) => {
                    return (error as any).status !== 404 && failureCount < 2;
                }
            }
        }
    });
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
export default ReactQueryProvider;