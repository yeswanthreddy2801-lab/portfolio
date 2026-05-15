
import './App.css'
import HeaderFile from './components/HeaderFile.jsx'

function App() {

  return (
    <>
   <HeaderFile/>
   <Profile/>
 
    </>
  )
}

export function Profile()
{
  return(
    <div className='profile-body'>
      <div className='about-me'>
        hello
      </div>
      <div className='image-section'>
      image
        <div className='image'>
          
        </div>
        <div className='data'>
          data
        </div>
      </div>
    </div>
  );

}
export default App
