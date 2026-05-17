import "./NamePage.css";
import Call from '../assets/call.webp'
import Github from '../assets/github.webp'
import Gmail from '../assets/gmail.webp'
import Linkedin from '../assets/Linkedin.webp'
import Leetcode from '../assets/leetcode.png'
export default function NamePage() {
  return (
    <div className="namePage">
      <h1 className="nameSize">
        Yeswanth <span className="span">Reddy</span>
      </h1>
      <p className="paraa">Web Development <span className="span">&</span> problem Solving</p>
      <p className="paraa">Available for Opertunities</p>
      <div className="nameButtons">
        <button className="nameButton">View Projects</button>
        <button className="nameButton">Get in Touch</button>
      </div>
      <div className="links">
        <div className="logosContainer">
          <img src={Call} alt=""  className="logos"/>
        </div>
        <div className="logosContainer">
          <img src={Leetcode} alt=""  className="logos"/>
        </div>
        <div className="logosContainer">
          <img src={Linkedin} alt=""  className="logos"/>
        </div>
        <div className="logosContainer">
          <img src={Gmail} alt="" className="logos" />
        </div>
        <div className="logosContainer">
          <img src={Github} alt=""  className="logos"/>
        </div>
      </div>
    </div>
  );
}
