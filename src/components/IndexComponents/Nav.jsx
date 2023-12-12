import {Link} from 'react-router-dom'

function Nav ({title}){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-5">
                    <a className="navbar-brand" href="index.html"><span className="fw-bolder text-black">{title }</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><Link  className="nav-link" to="/home">Inicio</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/resumen">Resumen</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/projects">Projectos</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav