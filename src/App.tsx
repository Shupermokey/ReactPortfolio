import "./App.css";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import data from "./data.json";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <CardContainer data={data} />
      <Footer />
    </>
  );
}

export default App;
