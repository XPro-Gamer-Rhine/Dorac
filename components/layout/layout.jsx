import Navigation from "../Nav/Navigation";
import Footer from "../footer/Footer";

const Layout = ({ children, home }) => {
  return (
    <>
      <Navigation />
      <div className="container">{children}</div>
      {home ? " " : <Footer />}
    </>
  );
};

export default Layout;
