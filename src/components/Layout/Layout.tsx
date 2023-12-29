import { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
