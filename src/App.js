import './App.css';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import AboutMe from "./components/aboutme/aboutme";
import MyWork from "./components/mywork/mywork";
import Contact from "./components/contact/contact";
import Technology from "./components/technology/technology";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <MyWork />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
