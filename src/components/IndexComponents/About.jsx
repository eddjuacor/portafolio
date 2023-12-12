function About(){
    return( 
        <>
             <section className="bg-light py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Sobre mi</span></h2>
                                <p className="lead fw-light mb-4">Mi nombre es Eddy Juarez.</p>
                                <p className="text-muted">Mi pasatiempo favorito es obtener mas conocimiento sobre tecnologia, me apasiona la programacion soy 100% autodidacta, actualmente no cuento con experiencia, 
                                    pero el objetivo de investigar y estudiar es poder encontrar un trabajo como programador y ayudar a las empresas que lo requieran. </p>
                                <div className="d-flex justify-content-center fs-2 gap-4">  
                                    <a className="text-gradient" href="https://www.linkedin.com/in/eddju/"><i className="bi bi-linkedin"></i></a>
                                    <a className="text-gradient" href="https://github.com/eddjuacor"><i className="bi bi-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
        </>

    )
 }
 export default About