import React, { useContext } from 'react'
import PasswordContext from '../../../Context/PasswordContext'

function Numbers() {
    const { activeNumeric, NumberClick } = useContext(PasswordContext)
    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            NumberClick()
        }
    }

    return (
        <div className="option-row" onClick={NumberClick} onKeyDown={handleKeyDown} role="checkbox" aria-checked={activeNumeric} tabIndex={0}>
            <input
                type="checkbox"
                className="checkbox"
                onChange={() => { }}
                checked={activeNumeric}
                tabIndex={-1}
            />
            <h3>Include Numbers</h3>
        </div>
    )
}

export default Numbers
