import React from "react";
import Form from "./form";
import Info from "./info";
import "../../scss/contact/contact.scss";
import data from "./data/social";

const ContactElements = () => {
    const id = [1, 2];

    return (

        <div className="Contact">
            <div className="container">
                <div className="contact">
                    <div className="row">
                        <Form />
                        <Info items={data} id={id}/>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default ContactElements;