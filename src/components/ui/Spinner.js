import React from 'react'
import spinner from "../../img/spinner.gif"

const Spinner = () => {
    return (
        <div>
            <img src={spinner} alt="spinner" style = {{ width: "200px", margin: "auto", display: "block" }} />
        </div>
    )
}

export default Spinner
