import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
    <div className="background">
      <div className="border">
        <h3 className="header">Password Generator</h3>
        <div className="generate-password">
          <h2>assdadasd15625</h2>
          <FontAwesomeIcon icon={faCopy} className='copy-icon' />
        </div>
        <div className="generate-area">
          <div className="character-length">
            <h3>Character Length</h3>
            <h1>10</h1>
          </div>
          <input type="range" id="range" name="range" value="50" />
          {/* OPTİONS SELECT */}
          <div className="options">
            <div>
              <input type="checkbox" className="checkbox" name="vehicle1" value="Bike" />
              <h3>Include Uppercase Letters</h3>
            </div>
            <div>
              <input type="checkbox" className="checkbox" name="vehicle1" value="Bike" />
              <h3>Include Uppercase Letters</h3>
            </div>
            <div>
              <input type="checkbox" className="checkbox" name="vehicle1" value="Bike" />
              <h3>Include Numbers</h3>
            </div>
            <div>
              <input type="checkbox" className="checkbox" name="vehicle1" value="Bike" />
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
          <div className="generate">
            GENERATE
            <FontAwesomeIcon icon={faArrowRight} className='icon' />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
