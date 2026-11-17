import About from "./components/about/about";
import Project from "./components/projects/projects";
import Exp from "./components/experience/exp";
import Certi from "./components/certificates/certi";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <div className="container">
      <section id="about" style={{ maxWidth: "100vw" }}>
        <About />
      </section>
      <Project />
      <section id="exp">
        <Exp />
      </section>
      <section id="certi">
        <Certi />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
