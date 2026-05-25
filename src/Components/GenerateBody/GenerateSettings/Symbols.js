import React, { useContext } from 'react'
import PasswordContext from '../../../Context/PasswordContext'

function Symbols() {
    const { SymbolsClick, activeSymbols } = useContext(PasswordContext)
    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            SymbolsClick()
        }
    }

    return (
        <div className="option-row" onClick={SymbolsClick} onKeyDown={handleKeyDown} role="checkbox" aria-checked={activeSymbols} tabIndex={0}>
            <input
                type="checkbox"
                className="checkbox"
                onChange={() => { }}
                checked={activeSymbols}
                tabIndex={-1} />
            <h3>Include Symbols</h3>
        </div>
    )
}

export default Symbols
