import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect } from 'react';

function App() {
  const [password, setPassword] = useState("")
  const [characterLength, setCharacterLength] = useState("5")


  const [activeUpper, setActiveUpper] = useState(false)
  const [activeLower, setActiveLower] = useState(false)
  const [activeNumeric, setActiveNumeric] = useState(false)
  const [activeSymbols, setActiveSymbols] = useState(false)

  const [pwUpper, setPwUpper] = useState("")
  const [pwLower, setPwLower] = useState("")
  const [pwNumeric, setPwNumeric] = useState("")
  const [pwSymbols, setPwSymbols] = useState("")
  // validate+
  const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const Lower = "abcdefghijklmnopqrstuvwxyz";
  const Numbers = "1234567890";
  const Symbols = ".!#+%?";
  // validate-

  // UPPER +
  const UpperClick = () => {
    setActiveUpper(!activeUpper)
  }
  useEffect(() => {
    return activeUpper ? setPwUpper(Upper) : setPwUpper("")
  }, [UpperClick])
  // UPPER -

  // LOWER +
  const LowerClick = () => {
    setActiveLower(!activeLower)
  }
  useEffect(() => {
    return activeLower ? setPwLower(Lower) : setPwLower("")
  }, [UpperClick])
  // LOWER -

  // NUMERİC +
  const NumberClick = () => {
    setActiveNumeric(!activeNumeric)
  }
  useEffect(() => {
    return activeNumeric ? setPwNumeric(Numbers) : setPwNumeric("")
  }, [NumberClick])
  // NUMERİC -

  // SYMBOLS +
  const SymbolsClick = () => {
    setActiveSymbols(!activeSymbols)
  }
  useEffect(() => {
    return activeNumeric ? setPwNumeric(Numbers) : setPwNumeric("")
  }, [NumberClick])
  // SYMBOLS -

  const handleClick = () => {
    const sifre = pwUpper + pwLower + pwNumeric + pwSymbols
    // if (activeSymbols === true) {
    //   setPwSymbols(Symbols)
    // } else {
    //   setPwSymbols("")
    // }
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
                onChange={() => UpperClick()}
                value={activeUpper}
              />
              <h3>Include Uppercase Letters</h3>
            </div>

            {/* BURASI */}
            <div>
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => LowerClick()}
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
