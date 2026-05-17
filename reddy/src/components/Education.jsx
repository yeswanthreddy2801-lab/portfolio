import "./Education.css";
import Location from "../assets/location.webp";
import Calender from "../assets/calender.webp";
import CapPic from "../assets/educationCap.webp";
import Trophy from "../assets/trophy.webp";
export default function Education() {
  return (
    <>
      <h1 className="heading">Education</h1>
      <div className="container">
        <EducationContainer />
        <Achievements />
      </div>
    </>
  );
}
function Achievements() {
  return (
    <>
      <div className="educationContainer">
        <HeadOfEducation
          head="Achievements"
          parr="My Achievements"
          image="ach"
        />
        <div className="achieve">
          <div className="leetcode">
            <img src={CapPic} alt="" className="logo" />
            <div className="leetMatter">
              <p>
                <span className="span">600+ </span> problems in Leetcode
              </p>
              <p className="gray">
                solved 600+ problems on leetcode with 150 days+ streak
              </p>
            </div>
          </div>
          <div className="leetcode">
            <img src={Calender} alt="" className="logo" />
            <div className="streekMatter">
              <p>
                <span className="span">150 </span> days+ Leetcode streak
              </p>
              <p className="gray">
                Mainteained consistant problem solving streak
              </p>
            </div>
          </div>
          <div className="leetcode">
            <img src={CapPic} alt="" className="logo" />
            <div className="cppMatter">
              <p>
                <span className="span">C++ </span> Certification
              </p>
              <p className="gray">
                Udemy C++ Beginner to Beyond Course Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function HeadOfEducation({ head, parr, image }) {
  return (
    <div className="headOfEducation">
      {image === "edu" && <img src={CapPic} alt="" className="logo" />}
      {image === "ach" && <img src={Trophy} alt="" className="logo" />}
      <div>
        <h2>{head}</h2>
        <p>{parr}</p>
      </div>
    </div>
  );
}
function EducationContainer() {
  return (
    <>
      <div className="educationContainer">
        <HeadOfEducation
          head="Education"
          parr="My Academic Journey"
          image="edu"
        />
        <div className="college">
          <p>
            <span className="span">B.Tech Information Technology</span> <br />
            Anil Neerukonda Institute Of Technology & Sciences
          </p>
          <div className="cgpa">
            <div className="datePlace">
              <div className="calLoc">
                <img src={Calender} alt="" className="logosss" />
                <p>2023-2027</p>
              </div>
              <div className="calLoc">
                <img src={Location} alt="" className="logosss" />
                <p>Visakhapatnam</p>
              </div>
            </div>
            <p className="cgpaInside">
              <span className="span">9.3</span>/10 CGPA
            </p>
          </div>
        </div>
        <div className="college">
          <p>
            <span className="span">Senior Secondory (XII) ,Science</span> <br />
            Sree Basara Junior College
          </p>
          <div className="cgpa">
            <div className="datePlace">
              <div className="calLoc">
                <img src={Calender} alt="" className="logosss" />
                <p>2021-2023</p>
              </div>
              <div className="calLoc">
                <img src={Location} alt="" className="logosss" />
                <p>Visakhapatnam</p>
              </div>
            </div>
            <p className="cgpaInside">
              <span className="span">951</span>/1000 marks
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
