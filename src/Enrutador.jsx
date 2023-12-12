import {BrowserRouter as Router, Routes,Route,} from 'react-router-dom'
import Home from './pages/Home'
import Resumen from './pages/Resumen'
import Projects from './pages/Projects'
import Contact from './pages/Contact'




function Enrutador (){
return(
    <>
        <Router>
            
            <Routes>
               
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/resumen' element={<Resumen/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
                
            </Routes>
        </Router>  
    </>
)

}

export default Enrutador