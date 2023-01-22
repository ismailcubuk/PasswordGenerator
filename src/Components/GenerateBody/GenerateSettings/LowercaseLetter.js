import React, { useContext } from 'react'
import PasswordContext from '../../../Context/PasswordContext'

function LowercaseLetter() {
    const { LowerClick, activeLower } = useContext(PasswordContext)
    return (
        <div>
            <input
                type="checkbox"
                className="checkbox"
                onChange={LowerClick}
                value={activeLower}
            />
            <h3>Include Lowercase Letters</h3>
        </div>
    )
}

export default LowercaseLetter