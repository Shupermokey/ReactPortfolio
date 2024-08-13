import "./App.css";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import data from "./data.json";
import courses from "./courses.json";
import bootcamps from "./bootcamps.json";
import education from "./education.json";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <CardContainer data={data} infinite={true} />
      <CardContainer data={courses} infinite={false} />
      <CardContainer data={bootcamps} infinite={false} />
      <CardContainer data={education} infinite={false} />
      <Footer />
    </>
  );
}

export default App;
