import React, { useContext } from 'react'
import PasswordContext from '../../../Context/PasswordContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function ButtonGenerate() {
    const { activeUpper, activeLower, activeNumeric, activeSymbols, handleClick } = useContext(PasswordContext)
    return (
        <button className="generate" disabled={!activeUpper && !activeLower && !activeNumeric && !activeSymbols} onClick={handleClick}>
            GENERATE
            <FontAwesomeIcon icon={faArrowRight} className='icon' />
        </button>
    )
}

export default ButtonGenerate