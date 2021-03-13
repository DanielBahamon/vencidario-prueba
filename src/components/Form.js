import React, {Fragment, useState} from 'react';

import db from "firebase/app";

const Form = () => {

    const [values, setValues] = useState({
        fullname: '',
        mobile: '',
        city: '',
        email: '',
        comment: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    const handleFullnameInputChange = (event) => {
        setValues({...values, fullname: event.target.value})
    }
    const handleMobileInputChange = (event) => {
        setValues({...values, mobile: event.target.value})
    }

    const handleCityInputChange = (event) => {
        setValues({...values, city: event.target.value})
    }

    const handleEmailInputChange = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handleCommentInputChange = (event) => {
        setValues({...values, comment: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.fullname && values.mobile && values.city && values.email){
            
            // enviamos nuestro objeto "params" a firebase database
            /*db.database().ref('form').push(values).then(() => {
                setValid(true);
            });*/

            setValid(true);
        };
        
        setSubmitted(true);
    }

    return ( 
        <Fragment>
            { 
                submitted && valid ? 

                <div className="d-table fullsize">
                    <div className="d-table-cell v-middle text-center">
                        <p>Datos recibidos correctamente. Pronto uno de nuestros asesores se pondrá en contacto contigo.</p>
                    </div>
                </div> 
                :
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="row">
                        
                        <div className="col-12 mb-3 input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="bi-person"></i>
                                </div>
                            </div>
                            <input className="form-control row" placeholder="Tu nombre" name="fullname" 
                            value={values.fullname}
                            onChange={handleFullnameInputChange} />
                        </div>
                        {submitted && !values.fullname ? <div className="col-12 alert alert-danger" role="alert">Por favor ingresa tu nombre</div> : null}
                        <div className="col mb-3 input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="bi-phone"></i>
                                </div>
                            </div>
                            <input type="number" className="form-control" placeholder="Tu numero celular" name="mobile"
                            value={values.mobile}
                            onChange={handleMobileInputChange} />
                        </div>
                        {submitted && !values.mobile ? <div className="col-12 alert alert-danger" role="alert">Por favor ingresa tu numero celular</div> : null}
                        <div className="col mb-3 input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="bi-building"></i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="Tu ciudad" name="city" 
                            values={values.city}
                            onChange={handleCityInputChange} />
                        </div>
                        {submitted && !values.city ? <div className="col-12 alert alert-danger" role="alert">Por favor ingresa tu ciudad</div> : null}
                        <div className="col-12 mb-3 input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="bi-mailbox"></i>
                                </div>
                            </div>
                            <input type="email" className="form-control" placeholder="Tu email" name="email" 
                            values={values.email}
                            onChange={handleEmailInputChange} />
                        </div>
                        {submitted && !values.email ? <div className="col-12 alert alert-danger" role="alert">Por favor ingresa tu email</div> : null}
                        <div className="col mb-3 input-group">
                            <textarea className="form-control" rows="5" placeholder="Tu comentario" name="comment" 
                            value={values.comment}
                            onChange={handleCommentInputChange} ></textarea>
                        </div>
                        <div className="d-grid ">
                            <p className="text-center">
                                <small className="text-white text-center">Al hacer clic en enviar, estás aceptando los términos y condiciones</small>
                            </p>
                            {submitted && valid ? <input type="submit" value="Enviar" disabled className="btn btn-cstm btn-block f-oswald " /> : <input type="submit" value="Enviar" className="btn btn-cstm btn-block f-oswald " />}
                        </div>
                    </div>
                </form>
            }
            
        </Fragment>
     );
}
 
export default Form;