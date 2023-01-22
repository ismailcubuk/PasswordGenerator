import React, { useContext } from 'react'
import PasswordContext from '../../../Context/PasswordContext'

function Symbols() {
    const { SymbolsClick } = useContext(PasswordContext)
    return (
        <div>
            <input
                type="checkbox"
                className="checkbox"
                onChange={SymbolsClick}
                value="Bike" />
            <h3>Include Symbols</h3>
        </div>
    )
}

export default Symbols