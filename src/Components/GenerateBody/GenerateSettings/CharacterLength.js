import React, { useContext } from 'react'
import PasswordContext from '../../../Context/PasswordContext'

function CharacterLength() {
    const { handleChange, characterLength } = useContext(PasswordContext)
    return (
        <input
            type="range"
            id="range"
            name="range"
            min={1} max={10} step={1}
            value={characterLength}
            onChange={handleChange}
        />
    )
}

export default CharacterLength