import "./App.css";
import HeaderFile from "./components/HeaderFile.jsx"
import Profile from "./components/Profile.jsx"
import NamePage from "./components/NamePage.jsx"
import Projects from "./components/Projects.jsx"
import Education from "./components/Education.jsx"
import Connect from "./components/Connect.jsx"
import TechnicalSkills from "./components/TechnicalSkills.jsx";


function App() {
  return (
    <>
      <HeaderFile />
      <NamePage />
      <Profile />
      <Projects />
      <TechnicalSkills />
      <Education />
      <Connect />
    </>
  );
}

export default App;
