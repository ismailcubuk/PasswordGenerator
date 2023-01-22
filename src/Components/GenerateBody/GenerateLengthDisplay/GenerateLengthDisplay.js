import { useContext } from "react"
import PasswordContext from "../../../Context/PasswordContext"

function GenerateLengthDisplay() {
    const { characterLength } = useContext(PasswordContext)
    return (
        <div className="character-length">
            <h3>Character Length</h3>
            <h1>{characterLength}</h1>
        </div>
    )
}

export default GenerateLengthDisplay