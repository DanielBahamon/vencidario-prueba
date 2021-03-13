import React, { Fragment } from 'react';
import Form from './Form';

const Section_1 = () => {
    return ( 
        <Fragment>
            <section id="section_1" className="fullscreen">
                <div className="d-table fullsize">
                <div className="d-table-cell v-middle">
                    <div className="container">
                        <div className="row m-0">
                            <div className="col col-xl-10 offset-xl-1">
                                <div className="row _card _1 m-0">
                                    <div className="col-md-6 _cont" id="_contact_card_1">
                                    <div className="promo">
                                        <div className="_bono row">
                                            <h2 className="col _title _2 text-center f-oswald">Obtén <b>Bono</b> de </h2>
                                            <h1 className="col-12 _title _2 text-center f-oswald"><b>$2'000.000</b></h1>
                                        </div>
                                        <br/>
                                        <div className="_title _3 row">
                                            <h2 className="col">Lugar <b>Exclusivo </b></h2>
                                            <h2 className="col"><small>Con</small> Entorno campestre,</h2>
                                        </div>
                                        <br/>
                                        <div className="_square_bono f-oswald">
                                            <h3>Y una vista inigualable</h3>
                                        </div>
                                        <hr/>
                                        <h4 className="_title _4">Medellín Belen - <b>Sector Rodeo Alto</b></h4>
                                    </div>
                                    </div>
                                    <div className="col-md-6 _cont" id="_contact_card_2">
                                    <h2 className="_title _1 fw-200 mb-4 text-center">¡Déjanos tus datos y te <br className="d-none d-md-block" /> <span className="fw-600">mantendremos informado!</span></h2>
                                    <Form />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
                
            </section>
        </Fragment>
     );
}
 
export default Section_1;