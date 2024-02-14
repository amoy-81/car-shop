import Header from "./components/header/Header";
import Footer from "./components/home/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
