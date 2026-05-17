import './Education.css';
import Location from '../assets/location.webp'
import Calender from '../assets/calender.webp'
import CapPic from '../assets/educationCap.webp'
export default function Education()
{
    return(
        <>
            <h1 className='heading'>Education</h1>
            <div className='container'>
                <EducationContainer />
                {/* <EducationContainer /> */}
            </div>
        </>
    );
}
function EducationContainer()
{
    return(
        <>
        <div className='educationContainer'>
        <div className='headOfEducation'>
            <img src={CapPic} alt="" className='logo' />
            <div>
                <h2>Education</h2>
                <p>My Academic Journey</p>
            </div>
        </div>
        <div className='college'>
            <p><span className="span">B.Tech Information Technology</span> <br />
Anil Neerukonda Institute Of Technology & Sciences</p>
<div className='cgpa'>
        <div className='datePlace'>
            <div className='calLoc'>
                <img src={Calender} alt="" className="logosss"/>
                <p>2023-2027</p>
            </div>
            <div className='calLoc'>
                <img src={Location} alt="" className="logosss"/>
                <p>Visakhapatnam</p>
            </div>
        </div>
        <p className='cgpaInside'><span className='span'>9.3</span>/10 CGPA</p>
</div>
            
        </div>
        <div className='college'>
            <p><span className="span">Senior Secondory (XII) ,Science</span> <br />
Sree Basara Junior College</p>
<div className='cgpa'>
        <div className='datePlace'>
            <div className='calLoc'>
                <img src={Calender} alt="" className="logosss"/>
                <p>2021-2023</p>
            </div>
            <div className='calLoc'>
                <img src={Location} alt="" className="logosss"/>
                <p>Visakhapatnam</p>
            </div>
        </div>
        <p className='cgpaInside'><span className='span'>951</span>/1000 marks</p>
</div>
            
        </div>
        </div>
        </>
    );
}