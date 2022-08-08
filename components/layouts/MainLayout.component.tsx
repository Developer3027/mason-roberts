import { ReactNode } from "react";
import Sidebar from "../Sidebar.component";
import Navbar from "../TopNav.component";
import Footer from "../Footer.component";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="block w-screen bg-slate-900">
      <Navbar />
        {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
