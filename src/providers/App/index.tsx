import router from "@Routes/AppRoutes.routes";
import ProvidersContainer from "providersContainer";
import { RouterProvider } from "react-router-dom";
export default function App() {
  return (
    <div className="bg-bg-color">
      <ProvidersContainer>
        <RouterProvider router={router} />
      </ProvidersContainer>
    </div>
  );
}
