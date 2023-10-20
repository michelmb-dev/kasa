import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./AppRoutes";

function App() {

  return (
    <>
      <Header/>
        <main className="main-wrapper">
          <AppRoutes />
        </main>
      <Footer/>
    </>
  );
}

export default App;
