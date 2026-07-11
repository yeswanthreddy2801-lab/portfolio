import "./Connect.css";
import Phone from "../assets/call.webp";
import Gmail from "../assets/gmail.webp";
import Linkedin from "../assets/Linkedin.webp";
import Github from "../assets/github.webp";
export default function Connect() {
  return (
    <>
    <h1 className="heading">Connect Me</h1>
    <div className="container">
      <div className="leetcodes" >
        <img src={Phone} alt="" className="logou" />
        <div className="leetMatter">
          <p>
           
            Phone
          </p>
          <p className="gray">8297364002</p>
        </div>
      </div>
      <div className="leetcodes">
        <img src={Gmail} alt="" className="logou" />
        <div className="leetMatter">
          <p>
        
            Gmail
          </p>
          <p className="gray">yeswanthreddy2801@gmail.com</p>
        </div>
      </div>
      <div className="leetcodes">
        <img src={Github} alt="" className="logou" />
        <div className="leetMatter">
          <p>
           
            Github
          </p>
          <p className="gray">Gorusu Yeswanth Reddy</p>
        </div>
      </div>
      <div className="leetcodes">
        <img src={Linkedin} alt="" className="logou" />
        <div className="leetMatter">
          <p>
           
            Linkedin
          </p>
          <p className="gray">Gorusu Yeswanth Reddy</p>
        </div>
      </div>
    </div>
    </>
  );
}
