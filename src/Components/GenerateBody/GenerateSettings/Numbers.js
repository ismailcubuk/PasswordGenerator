import React, { useContext } from 'react'
import PasswordContext from '../../../Context/PasswordContext'

function Numbers() {
    const { activeNumeric, NumberClick } = useContext(PasswordContext)
    return (
        <div>
            <input
                type="checkbox"
                className="checkbox"
                onChange={NumberClick}
                value={activeNumeric}
            />
            <h3>Include Numbers</h3>
        </div>
    )
}

export default Numbers