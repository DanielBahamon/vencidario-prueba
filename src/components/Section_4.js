import React, { Fragment } from 'react';

const Section_4 = () => {
    return ( 
        <Fragment>
            <section id="section_4">
                <div className="container">
                <br/>
                <h1 className="_title _2 f-oswald t-primary text-center">Sala de negocios</h1>
                <br/>
                <br/>
                <div className="row m-0">
                    <div className="col col-lg-3">
                        <a className="_icon _2" href="tel:3137050212">
                            <i className="material-icons">phone_android</i><br/>
                            <b>Tel:</b>
                            <p>3439241 - 3137050212</p>
                        </a>
                    </div>
                    <div className="col col-lg-3">
                        <div className="_icon _2">
                            <i className="material-icons">location_on</i><br/>
                            <b>Dirección:</b>
                            <p>Calle 6 sur # 79 - 158 Medellín</p>
                        </div>
                    </div>
                    <div className="col col-lg-3">
                        <div className="_icon _2">
                            <i className="material-icons">access_time</i><br/>
                            <b>Hora de Atención:</b>
                            <p>10:00 am - 5:30 pm</p>
                        </div>
                    </div>
                    <div className="col col-lg-3">
                        <a className="_icon _2" href="mailto:remansodelrodeo@une.net.co">
                            <i className="material-icons">email</i><br/>
                            <b>Correo:</b>
                            <p>remansodelrodeo@une.net.co</p>
                        </a>
                    </div>
                </div>
                <div className="row m-0 _subfooter mt-5">
                    <div className="col-12">
                    <p className="t-primary">Las imagenes utilizadas son representaciones digitales del diseño junto con las oficinas, locales y apartamenteos pueden variar
                        en la construcción final. El mobiliario; electrodomesticos, gasodomesticos, acabados y demas elementos que apraecen en la imagen son 
                        una representación a fin de ilustrar la utilización de los espacios y pueden diferir de lo entregado o no ser entregado segun 
                        lo convenido en los contratos. Las areas privadas y cosntruidas podran sufrir ajustes y quedaran finalmente determidads en los contratos
                        suscritos poir partes.
                    </p>
                    </div>
                </div>
                </div>
                
            </section>
        </Fragment>
     );
}
 
export default Section_4;