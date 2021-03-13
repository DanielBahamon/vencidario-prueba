import React, { Fragment } from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";

const Contacts = () => {

    const addOrEdit = obj => {
        firebaseDb.child('contacts').push(
            obj,
            err => {
                if (err)
                    console.log(err)
            }
        )
    }

    return ( 
        <Fragment>
            <div className="container">
                <div className="bg-light p-4">
                    <h1 className="display-4 text-center">Contacto</h1>
                    <br />
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <ContactForm addOrEdit={addOrEdit} />
                    </div>
                    <div className="col-md-7">
                        <p>List of contacts</p>
                    </div>
                </div>
            </div>
            
        </Fragment>
        );
}
 
export default Contacts;