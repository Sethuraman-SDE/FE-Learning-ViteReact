import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Sidebar from "../components/navigation/Sidebar";

const AppLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
