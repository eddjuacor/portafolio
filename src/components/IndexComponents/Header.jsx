import {Link} from 'react-router-dom'

function Header (){
    return(
        <>
             <header className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                         
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-dark bg-light text-white mb-4"><div className="text-uppercase">Web &middot; Development </div></div>
                                <div className="fs-3 fw-light text-muted">Si lo puedes imaginar, lo puedes programar.</div>
                                <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Soy Edd J.</span></h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <Link className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to="/resumen">Resumen</Link>
                                    <Link className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" to="/projects">Projectos</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                            
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-black">
                                   
                                    <img className="profile-img" src="assets/profile.png" alt="..." />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header