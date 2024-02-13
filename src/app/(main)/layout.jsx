import Header from "./components/header/Header";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainLayout;
