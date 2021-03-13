import React, { Fragment } from 'react';

const Section_2 = () => {
    return ( 
        <Fragment>
            <section id="section_2" className="row m-0">
                <div className="col-md-6" id="img_section_2"></div>
                <div className="col-md-6" id="cont_section_2">
                <div className="container pt-4 pb-4">
                    <br/>
                    <h3 className="_square_title f-oswald">Proyecto</h3>
                    <p>Remanso el Rodeo, un proyecto ubicado en Belén, sector Rodeo Alto, un lugar exclusivo con entorno campestre, excelente valorización 
                    y una vista inigualable sobre Rodeo Alto y gran parte de la ciudad de Medellín.
                    </p>
                    <p>Cuenta con beneficios unicos de movilidad cercania a lugares comerciales, ademas de tener diferentes vías de acceso.</p>
                    <br/>
                    <b>Cercano a:</b>
                    <ol className="list_cstm">
                    <li><i>Clinica las Americas</i></li>
                    <li><i>Club de Rodeo</i></li>
                    <li><i>Carrera 80</i></li>
                    <li><i>Guayabal</i></li>
                    <li><i>La Mota</i></li>
                    <li><i>Aeropuerto Olaya Herrera</i></li>
                    <li><i>Parque Juan Pablo II</i></li>
                    <li><i>Sector comercial Guayabal</i></li>
                    <li><i>Exito de la Gran Vía</i></li>
                    </ol>
                </div>
                
                </div>
            </section>
        </Fragment>
     );
}
 
export default Section_2;