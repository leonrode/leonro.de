import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <main className="bg-bg w-screen h-screen overflow-y-auto p-8  lg:p-12">
      <Nav />
      <section className="py-8 h-full">{children}</section>
    </main>
  );
};

export default Layout;
