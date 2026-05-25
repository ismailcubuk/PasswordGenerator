import React, { useContext } from 'react'
import PasswordContext from '../../../Context/PasswordContext'

function LowercaseLetter() {
    const { LowerClick, activeLower } = useContext(PasswordContext)
    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            LowerClick()
        }
    }

    return (
        <div className="option-row" onClick={LowerClick} onKeyDown={handleKeyDown} role="checkbox" aria-checked={activeLower} tabIndex={0}>
            <input
                type="checkbox"
                className="checkbox"
                onChange={() => { }}
                checked={activeLower}
                tabIndex={-1}
            />
            <h3>Include Lowercase Letters</h3>
        </div>
    )
}

export default LowercaseLetter
