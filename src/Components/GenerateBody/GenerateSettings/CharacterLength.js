import React, { useContext } from 'react'
import PasswordContext from '../../../Context/PasswordContext'

function CharacterLength() {
    const { handleChange, characterLength } = useContext(PasswordContext)
    return (
        <input
            type="range"
            id="range"
            name="range"
            aria-label="Character length"
            min={4} max={10} step={1}
            value={characterLength}
            onChange={handleChange}
        />
    )
}

export default CharacterLength
