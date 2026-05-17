import "./App.css";
import HeaderFile from "./components/HeaderFile.jsx"
import Profile from "./components/Profile.jsx"
import NamePage from "./components/NamePage.jsx"
import Projects from "./components/Projects.jsx"
import Education from "./components/Education.jsx"


function App() {
  return (
    <>
      <HeaderFile />
      <NamePage />
      <Profile />
      <Projects />
      <Education />
    </>
  );
}

export default App;
