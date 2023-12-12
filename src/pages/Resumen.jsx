import Nav from '../components/IndexComponents/Nav'
import Education from '../components/resumenComponents/Education'
import Job from '../components/resumenComponents/Job'
import Tecnologies from '../components/resumenComponents/Tecnologies'

function Resumen(){
    return(
      <>
       <div class="container px-5 my-5">
            <Nav title="Mi Resumen" />
            <Education/>
            <Job/>
            <Tecnologies/>

        </div>       
      </>
       
    )
}
export default Resumen