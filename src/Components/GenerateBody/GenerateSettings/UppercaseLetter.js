import React, { useContext } from 'react'
import PasswordContext from '../../../Context/PasswordContext'

function UppercaseLetter() {
    const { activeUpper, UpperClick } = useContext(PasswordContext)
    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            UpperClick()
        }
    }

    return (
        <div className="option-row" onClick={UpperClick} onKeyDown={handleKeyDown} role="checkbox" aria-checked={activeUpper} tabIndex={0}>
            <input
                type="checkbox"
                className="checkbox"
                onChange={() => { }}
                checked={activeUpper}
                tabIndex={-1}
            />
            <h3>Include Uppercase Letters</h3>
        </div>
    )
}

export default UppercaseLetter
