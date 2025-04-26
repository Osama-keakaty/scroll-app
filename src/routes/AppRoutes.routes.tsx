import { LoadingSpinner } from "@Components/LoadingSpinner";
import Image from "@Pages/Image";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = lazy(() => import("@Layout/index"));
const Home = lazy(() => import("@Pages/Home"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <Layout />
            </Suspense>
        ),
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]
    },
    {
        path: "/image/:id",
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <Image />
            </Suspense>
        ),
    }
]);

export default router;