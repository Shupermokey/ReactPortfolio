import "./App.css";
import CardContainer from "./components/CardContainer";
import CourseContainer from "./components/CourseContainer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import data from "./data.json";
import courses from "./courses.json";
import bootcamps from "./bootcamps.json";
import BootCampContainer from "./components/BootCampContainer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <CardContainer data={data} />
      <CourseContainer courses={courses} />
      <BootCampContainer bootcamps={bootcamps} />
      <Footer />
    </>
  );
}

export default App;
