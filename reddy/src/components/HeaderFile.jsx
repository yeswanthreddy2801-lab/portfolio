import "./HeaderFile.css";
import Thunder from '../assets/thunder.webp'
export default function HeaderFile() {
  return (
    <>
      <div className="headerBody">
        <div className="leftSide">
          <img src={Thunder} alt="" className="logoss"/>
          <h2 className="span">YR</h2>
        </div>
        <div className="rightSide">

        </div>
      </div>
    </>
  );
}
