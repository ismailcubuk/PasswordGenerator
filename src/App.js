import Toast from 'react-bootstrap/Toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  // const [strength, setStrength] = useState([])
  const strength = []

  // useEffect(() => {

  //   console.log("içeride " + strength);

  // }, [strength, characterLength, activeSymbols, activeNumeric, activeLower, activeUpper])

  if (activeUpper) {
    strength.push(2)
  } else {
    strength.push(0)
  }
  if (activeLower) {
    strength.push(2)
  } else {
    strength.push(0)
  }
  if (activeNumeric) {
    strength.push(2)
  } else {
    strength.push(0)
  }
  if (activeSymbols) {
    strength.push(4)
  } else {
    strength.push(0)
  }



  // if (characterLength > 0 && characterLength <= 2) {
  //   strength.push(2)
  // } else {
  //   strength.push(0)
  // }
  // if (characterLength > 2 && characterLength <= 4) {
  //   strength.push(4)
  // } else {
  //   strength.push(0)
  // }
  // if (characterLength > 4 && characterLength <= 6) {
  //   strength.push(6)
  // } else {
  //   strength.push(0)
  // }
  // if (characterLength > 6 && characterLength <= 8) {
  //   strength.push(8)
  // } else {
  //   strength.push(0)
  // }
  // if (characterLength > 8) {
  //   strength.push(10)
  // } else {
  //   strength.push(0)
  // }

  let sum = strength.reduce((total, currentValue) => total + currentValue)
  let sumCalculate = sum * characterLength

  const [difficulty, setDifficulty] = useState("")
  // EASY
  const [easyActive, setEasyActive] = useState(false)
  const easy = {
    border: easyActive ? "2px solid yellow" : "",
    backgroundColor: easyActive ? "yellow" : ""
  }
  useEffect(() => {
    if (sumCalculate > 0 && sumCalculate <= 20) {
      console.log("sumCalculate EASY " + sumCalculate);
      setEasyActive(true)
      setDifficulty("Easy")
    }

    return () => {
      setEasyActive(false)
      setDifficulty("")
    }
  }, [sumCalculate])

  // MEDİUM
  const [mediumActive, setMediumActive] = useState(false)
  const medium = {
    border: mediumActive ? "2px solid yellow" : "",
    backgroundColor: mediumActive ? "yellow" : ""
  }
  useEffect(() => {
    if (sumCalculate > 21 && sumCalculate <= 40) {
      console.log("sumCalculate medium " + sumCalculate);
      setEasyActive(true)
      setMediumActive(true)
      setDifficulty("Medium")
    }

    return () => {
      setEasyActive(false)
      setMediumActive(false)
      setDifficulty("")
    }
  }, [sumCalculate])
  // HARD
  const [hardActive, setHardActive] = useState(false)
  const hard = {
    border: hardActive ? "2px solid yellow" : "",
    backgroundColor: hardActive ? "yellow" : ""
  }
  useEffect(() => {
    if (sumCalculate > 41 && sumCalculate <= 60) {
      console.log("sumCalculate hard " + sumCalculate);
      setEasyActive(true)
      setMediumActive(true)
      setHardActive(true)
      setDifficulty("Hard")
    }

    return () => {
      setEasyActive(false)
      setMediumActive(false)
      setHardActive(false)
      setDifficulty("")
    }
  }, [sumCalculate])
  // EXPERT
  const [expertActive, setExpertActive] = useState(false)
  const expert = {
    border: expertActive ? "2px solid yellow" : "",
    backgroundColor: expertActive ? "yellow" : ""
  }
  useEffect(() => {
    if (sumCalculate > 61 && sumCalculate <= 100) {
      console.log("sumCalculate expert " + sumCalculate);
      setEasyActive(true)
      setMediumActive(true)
      setHardActive(true)
      setExpertActive(true)
      setDifficulty("Expert")
    }

    return () => {
      setEasyActive(false)
      setMediumActive(false)
      setHardActive(false)
      setExpertActive(false)
      setDifficulty("")
    }
  }, [sumCalculate])

  // UPPER +
  const UpperClick = () => {
    setActiveUpper(!activeUpper)
  }
  useEffect(() => {
    return activeUpper ? setPwUpper(Upper) : setPwUpper("")
  }, [activeUpper])
  // UPPER -

  // LOWER +
  const LowerClick = () => {
    setActiveLower(!activeLower)
  }
  useEffect(() => {
    return activeLower ? setPwLower(Lower) : setPwLower("")
  }, [activeLower])
  // LOWER -

  // NUMERİC +
  const NumberClick = () => {
    setActiveNumeric(!activeNumeric)
  }
  useEffect(() => {
    return activeNumeric ? setPwNumeric(Numbers) : setPwNumeric("")
  }, [activeNumeric])
  // NUMERİC -

  // SYMBOLS +
  const SymbolsClick = () => {
    setActiveSymbols(!activeSymbols)
  }
  useEffect(() => {
    return activeSymbols ? setPwSymbols(Symbols) : setPwSymbols("")
  }, [activeSymbols])
  // SYMBOLS -

  const handleClick = () => {
    const sifre = pwUpper + pwLower + pwNumeric + pwSymbols
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

  const copyClick = () => {
    let trimPassword = []
    trimPassword.push(password.reduce((a, b) => a + b + '').trim())
    navigator.clipboard.writeText(trimPassword).then(() => {
    });
    setShowToast(!showToast)
  };

  const enabledCopy = {
    color: "white",
    height: "24px",
    cursor: "pointer"
  }
  const disabledCopy = {
    color: "white",
    opacity: "0.4",
    height: "24px",
    cursor: "pointer"
  }

  // TOASTS

  const [showToast, setShowToast] = useState(false);


  return (
    <div className="background">
      <div className="borderPage">
        <h3 className="header">Password Generator</h3>
        <div className="generate-password">
          <h2>{password}</h2>
          <FontAwesomeIcon
            icon={faCopy}
            className='copy-icon'
            style={password === "" ? disabledCopy : enabledCopy}
            onClick={copyClick}
          />
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
                onChange={UpperClick}
                value={activeUpper}
              />
              <h3>Include Uppercase Letters</h3>
            </div>

            {/* BURASI */}
            <div>
              <input
                type="checkbox"
                className="checkbox"
                onChange={LowerClick}
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
          <button className="generate" disabled={!activeUpper && !activeLower && !activeNumeric && !activeSymbols} onClick={handleClick}>
            GENERATE
            <FontAwesomeIcon icon={faArrowRight} className='icon' />
          </button>
        </div>
      </div>
      {/* autohide delay={2000} */}

      <div className='toast-div'>
        <Toast show={showToast} onClose={() => setShowToast(false)} autohide delay={1000} position={'bottom-end'} className="toast" bg={"success"}>
          <Toast.Header className='toast-header' closeButton={false}>
            <strong className="me-auto">Copy Password</strong>
          </Toast.Header>
          <Toast.Body className='toast-body'> {password} </Toast.Body>
        </Toast>
      </div>
    </div >
  );
}

export default App;
