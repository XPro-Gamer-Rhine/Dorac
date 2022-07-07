import Navigation from "../Nav/Navigation";
import Footer from "../footer/Footer";

const Layout = ({ children, home }) => {
  return (
    <>
      <Navigation />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
