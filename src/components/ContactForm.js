import React, {useState, useEffect} from 'react';

const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        city: '',
        comment: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {
       var {name, value} = e.target
       setValues({
           ...values,
           [name]: value
       })
    } 

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }


    return ( 
        <form autoComplete="off">
            <div className="row">
                <div className="col-12 mb-3 input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="bi-person"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Tu nombre" name="fullName" 
                    value={values.fullName}
                    onChange={handleInputChange} />
                </div>
                <div className="col mb-3 input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="bi-phone"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Tu numero celular" name="mobile" value={values.mobile}
                    onChange={handleInputChange} />
                </div>
                <div className="col mb-3 input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="bi-building"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Tu ciudad" name="city" value={values.city} 
                    onChange={handleInputChange} />
                </div>
                <div className="col-12 mb-3 input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="bi-mailbox"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Tu email" name="email" value={values.email} 
                    onChange={handleInputChange} />
                </div>
                <div className="col mb-3 input-group">
                    <textarea className="form-control" placeholder="Tu comentario" name="comment" value={values.comment}
                    onChange={handleInputChange} ></textarea>
                </div>
                <div className="d-grid ">
                    <input type="submit" value="Enviar" className="btn btn-primary btn-block" />
                </div>
            </div>
        </form>
     );
}
 
export default ContactForm;