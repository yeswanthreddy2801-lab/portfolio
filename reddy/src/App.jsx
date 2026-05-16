import "./App.css";
import HeaderFile from "./components/HeaderFile.jsx"
import Profile from "./components/Profile.jsx"
import NamePage from "./components/NamePage.jsx"
import Projects from "./components/Projects.jsx"


function App() {
  return (
    <>
      <HeaderFile />
      <NamePage />
      <Profile />
      <Projects/>
    </>
  );
}

export default App;
