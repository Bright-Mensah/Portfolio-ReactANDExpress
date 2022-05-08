import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./nav-component/Home";
import About from "./nav-component/About";
import { Route } from "react-router-dom";
import Contact from "./nav-component/Contact";
import SkillsAndWorks from "./nav-component/SkillsAndWorks";
import NewsLetter from "./nav-component/NewsLetter";

function App() {
  // let compoKey = () => {
  //   const num = [1, 2, 3, 4, 5];
  //   for (let i = 0; i < num.length; i++) {
  //     console.log(num[i]);
  //   }
  // };
  // compoKey();
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/skillsandworks" component={SkillsAndWorks} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/newsLetter" component={NewsLetter} />
    </div>
  );
}

export default App;
