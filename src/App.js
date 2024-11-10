import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import AboutUs from "./components/AboutUs";
import Trainers from "./components/Trainers";
import Subscription from "./components/Subscription";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <AboutUs /> 
      <Trainers />
      <Subscription />
      <Contact />
    </>
  );
}

export default App;
