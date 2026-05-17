import "./Project.css";
import Github from "../assets/github.webp";
import Demo from "../assets/demo.webp";
const projects = [
  {
    heading: "Auction House1",
    category: "web",
    paragraph:
      "This is the good and wonderful website to experiance the live auction ",
    para: ["html", "css", "react"],
    features: [
      "good and superb",
      "sclable to everyone",
      "Instant use of website",
      "etc",
    ],
  },
  {
    heading: "Auction House2",
    category: "web",
    paragraph:
      "This is the good and wonderful website to experiance the live auction ",
    para: ["Html", "css", "react"],
    features: [
      "good and superb",
      "sclable to everyone",
      "Instant use of website",
      "etc",
    ],
  },
];

export default function Project() {
  return (
    <>
      {projects.map((proj) => {
        const hhh = proj.para.map((pp) => {
          return <p>{pp}</p>;
        });
        const features = proj.features.map((message) => {
          return <p>{message}</p>;
        });
        return (
          <>
            <div className="projectContainer">
              <h1>{proj.heading}</h1>
              <p className="catagory">{proj.category}</p>
              <p className="para">{proj.paragraph}</p>
              <div className="features">
                <h6>Features</h6>
                {features}
              </div>
              <div className="tecUsed">{hhh}</div>
              <div className="buttonsContainer">
                <div className="buttonFull">
                  <img src={Github} alt="" className="buttonIcon" />
                  <button className="button">Code</button>
                </div>
                <div className="buttonFull">
                  <img src={Demo} alt="" className="buttonIcon" />
                  <button className="button">Demo</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
