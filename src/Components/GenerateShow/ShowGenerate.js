import React, { useContext } from 'react'
import PasswordContext from '../../Context/PasswordContext'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'bootstrap/dist/css/bootstrap.min.css';
function ShowGenerate() {
    const { password, copyClick } = useContext(PasswordContext)
    const enabledCopy = {
        color: "white",
        height: "24px",
        cursor: "pointer"
    }
    const disabledCopy = {
        color: "white",
        opacity: "0.4",
        height: "24px",
        cursor: "pointer"
    }
    return (
        <div className="generate-password">
            <h2>{password}</h2>
            <FontAwesomeIcon
                icon={faCopy}
                className='copy-icon'
                style={password === "" ? disabledCopy : enabledCopy}
                onClick={copyClick}
            />
        </div>
    )
}

export default ShowGenerate