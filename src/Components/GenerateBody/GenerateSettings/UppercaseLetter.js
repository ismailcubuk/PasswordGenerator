import React, { useContext } from 'react'
import PasswordContext from '../../../Context/PasswordContext'

function UppercaseLetter() {
    const { activeUpper, UpperClick } = useContext(PasswordContext)
    return (
        <div>
            <input
                type="checkbox"
                className="checkbox"
                onChange={UpperClick}
                value={activeUpper}
            />
            <h3>Include Uppercase Letters</h3>
        </div>
    )
}

export default UppercaseLetter