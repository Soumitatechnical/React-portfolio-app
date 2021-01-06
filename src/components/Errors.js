import React from 'react'
import {Link} from 'react-router-dom'

const Errors = () => {
    return (
        <div className="errorpage">
            <h1>Error-404</h1>
            <p>Sorry,Page doesn't Exist</p>
           <Link to="/"> <button className="err-btn">Return Home</button></Link>
        </div>
    )
}

export default Errors
