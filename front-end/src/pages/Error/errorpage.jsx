import React from "react";
import { Link } from "react-router-dom";
import './errorpage.css'

function ErrorPage(){

    return(
    <div className="error_container">
        <h1>404</h1>
        <Link to="/">Back to main page</Link>
    </div>
    )
}

export default ErrorPage