import { ReactNode } from "react";
import Footer from "../Footer.component";

type SingleLayoutProps = {
  children: ReactNode;
};

const SinglePageLayout = ({children}: SingleLayoutProps) => {

  return (
    <div className="ml-auto bg-st-drk-primary">
      {children}
      <Footer />
    </div>
  );
};

export default SinglePageLayout;
