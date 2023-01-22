import { useContext } from "react"
import PasswordContext from "../../../Context/PasswordContext"

function Strength() {
    const { difficulty, easy, medium, hard, expert } = useContext(PasswordContext)
    return (
        <div className="strength">
            <h3>STRENGTH</h3>
            <div>
                <div className='difficulty'>
                    <h3> {difficulty} </h3>
                </div>
                <div className="levels">
                    <div className="level" style={easy}></div>
                    <div className="level" style={medium}></div>
                    <div className="level" style={hard}></div>
                    <div className="level" style={expert}></div>
                </div>
            </div>
        </div>
    )
}

export default Strength