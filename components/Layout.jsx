import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <main className="bg-bg w-screen h-screen p-8 lg:p-12">
      <Nav />
      <section className="pt-8 h-full">{children}</section>
    </main>
  );
};

export default Layout;
