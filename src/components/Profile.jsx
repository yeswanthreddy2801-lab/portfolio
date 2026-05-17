import "./Profile.css";
import ProfilePic from "../assets/profile.jpeg"
import Leetcode from "../assets/leetcode.png"
import Linkedin from "../assets/Linkedin.webp"
import Github from "../assets/github.webp"


export default function Profile() {
  return (
    <>
      <h1 className="heading">Who I Am</h1>
      <div className="profile-body">
        <div className="about-me">
          <p className="para">
            Passionate Computer Science student focused on full-stack web
            development and problem solving. Skilled in HTML, CSS, JavaScript,
            React, Node.js, Express, and MongoDB with hands-on experience
            building responsive and modern web applications. Solved <span className="span">600+</span> coding
            problems on LeetCode and continuously exploring system design,
            cybersecurity, and scalable application development. Interested in
            creating impactful software solutions and constantly learning new
            technologies.
          </p>
        </div>
        <div className="image-section">
          {/* <div className='image'> */}
          <img
            src={ProfilePic}
            className="image"
            alt="loading... profile-img"
          ></img>
          {/* </div> */}
          <div className="data">
            <div className="logosContainer">
            {/* <p>600</p> */}
            <img src={Leetcode} alt="" className="logos"/>
            </div>
            <div className="logosContainer">
            {/* <p>3000</p> */}

            <img src={Linkedin} alt="" className="logos"/>
            </div>
            <div className="logosContainer">
            {/* <p>600</p>/ */}

            <img src={Github} alt="" className="logos"/>
            </div>
                
          </div>
        </div>
      </div>
    </>
  );
}
// export default Profile;