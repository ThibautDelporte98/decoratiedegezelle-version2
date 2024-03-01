import React from "react";
import { Link } from "react-router-dom";
import "../../scss/404/404.scss";


export default function Error404() {
    return (
        <div className="container">
            <div className="pnf" style={{color: "white"}}>
                <div className="pnf-head">
                    <h1 className="pnf-title">404-page not found.</h1>
                    <p>Deze pagina is als een verfblik zonder deksel - iets ontbreekt! Gebruik onderstaande links om de boel af te dekken:</p>                    
                </div>
                <div className="pnf-links">
                    <Link to='/'>Home</Link>
                    <Link to='/diensten'>Diensten</Link>
                    <Link to='/contact'>Contact</Link>                    
                </div>
            </div>            
        </div>

    )
}