import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faL } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react';

function App() {
  const [password, setPassword] = useState("")
  const [characterLength, setCharacterLength] = useState("5")

  const [LowerText, setLowerText] = useState("")
  const [UpperText, setUpperText] = useState("")
  const [NumericText, setNumericText] = useState("")

  const [activeUpper, setActiveUpper] = useState(false)
  const [activeLower, setActiveLower] = useState(false)
  const [activeNumeric, setActiveNumeric] = useState(false)
  // validate+
  const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const Lower = "abcdefghijklmnopqrstuvwxyz";
  const Numbers = "1234567890";
  const Symbols = ".!#+%?";
  // validate-

  // UPPER
  const UpperClick = (e) => {
    setActiveUpper(e.target.value)
    setActiveUpper(!activeUpper)
  }
  useEffect(() => {
    if (activeUpper === true) {
      setUpperText(Upper)
    } else {
      setUpperText()
    }
  }, [activeUpper])
  // LOWER
  const LowerClick = (e) => {
    setActiveLower(e.target.value)
    setActiveLower(!activeLower)
  }
  useEffect(() => {
    if (activeLower === true) {
      setLowerText(Lower)
    } else {
      setLowerText()
    }
  }, [activeLower])
  // numeric
  const NumberClick = (e) => {
    setActiveNumeric(e.target.value)
    setActiveNumeric(!activeNumeric)
  }
  useEffect(() => {
    if (activeNumeric === true) {
      return setNumericText(Numbers)
    } else {
      return setNumericText()
    }
  }, [activeNumeric])
  const SymbolsClick = () => {
  }
  const sifre = UpperText + LowerText + NumericText
  console.log(sifre);


  const handleClick = () => {
    let letters = []
    for (let i = 0; i < characterLength; i++) {
      const randomIndex = Math.floor(Math.random() * sifre.length);
      letters.push(sifre[randomIndex])
    }
    setPassword(letters);
  }

  const handleChange = (e) => {
    setCharacterLength(e.target.value)
  }
  return (
    <div className="background">
      <div className="border">
        <h3 className="header">Password Generator</h3>
        <div className="generate-password">
          <h2>{password}</h2>
          <FontAwesomeIcon icon={faCopy} className='copy-icon' />
        </div>
        <div className="generate-area">
          <div className="character-length">
            <h3>Character Length</h3>
            <h1>{characterLength}</h1>
          </div>
          <input
            type="range"
            id="range"
            name="range"
            min={1} max={10} step={1}
            value={characterLength}
            onChange={handleChange}
          />
          {/* OPTİONS SELECT */}
          <div className="options">
            <div>
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => UpperClick(e)}
                value={activeUpper}
              />
              <h3>Include Uppercase Letters</h3>
            </div>

            {/* BURASI */}
            <div>
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => LowerClick(e)}
                value={activeLower}
              />
              <h3>Include Lowercase Letters</h3>
            </div>
            <div>
              <input
                type="checkbox"
                className="checkbox"
                onChange={NumberClick}
                value={activeNumeric}
              />
              <h3>Include Numbers</h3>
            </div>
            <div>
              <input
                type="checkbox"
                className="checkbox"
                onChange={SymbolsClick}
                value="Bike" />
              <h3>Include Symbols</h3>
            </div>
          </div>
          {/* STRENGTH */}
          <div className="strength">
            <h3>STRENTH</h3>
            <div>
              <h2>MEDIUM</h2>
              <div className="levels">
                <div className="level"></div>
                <div className="level"></div>
                <div className="level"></div>
                <div className="level"></div>
              </div>
            </div>
          </div>
          {/* DİSABLED EKLE */}
          <button className="generate" onClick={handleClick}>
            GENERATE
            <FontAwesomeIcon icon={faArrowRight} className='icon' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
