import { Navbar } from "@Layout/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (

    <div className="flex p-3 select-none">
      <div className="sticky top-0 z-50 flex-1 transition-all duration-1000 flex flex-col overflow-hidden">
        <div className="h-16 mt-4">
          <Navbar />
        </div>
        <div className="flex w-full p-10">
          {children}
        </div>
        <Outlet />
      </div>
    </div>
  );
};
