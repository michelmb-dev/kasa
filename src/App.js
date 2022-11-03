import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {Outlet} from "react-router-dom";
import useFetch from "./hooks/useFetch";

function App() {

  const housings = useFetch("logements.json");

  return (
    <>
      <Header/>
      <main className="main-wrapper">
        <Outlet context={housings}/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
