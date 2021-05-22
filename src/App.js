import React , {Fragment} from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Episodios from './Components/Episodios'
import MoreInfo from './Components/MoreInfo'
import Footer from './Components/Footer'
import  './Styles/Styles.css'
function App() {
  return (
  <Fragment>
   <Navbar/>
   <Home/>
   <Episodios/>
   <MoreInfo/>
   <Footer/>
   </Fragment>
  );
}

export default App;

