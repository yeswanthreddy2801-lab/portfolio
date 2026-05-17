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
      <div className="leetcode" >
        <img src={Phone} alt="" className="logo" />
        <div className="leetMatter">
          <p>
           
            Phone
          </p>
          <p className="gray">8297364002</p>
        </div>
      </div>
      <div className="leetcode">
        <img src={Gmail} alt="" className="logo" />
        <div className="leetMatter">
          <p>
        
            Gmail
          </p>
          <p className="gray">yeswanthreddy2801@gmail.com</p>
        </div>
      </div>
      <div className="leetcode">
        <img src={Github} alt="" className="logo" />
        <div className="leetMatter">
          <p>
           
            Github
          </p>
          <p className="gray">Gorusu Yeswanth Reddy</p>
        </div>
      </div>
      <div className="leetcode">
        <img src={Linkedin} alt="" className="logo" />
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
