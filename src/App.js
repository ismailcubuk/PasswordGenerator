import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import ShowGenerate from './Components/GenerateShow/ShowGenerate';
import GenerateLengthDisplay from './Components/GenerateBody/GenerateLengthDisplay/GenerateLengthDisplay';
import CharacterLength from './Components/GenerateBody/GenerateSettings/CharacterLength';
import UppercaseLetter from './Components/GenerateBody/GenerateSettings/UppercaseLetter';
import LowercaseLetter from './Components/GenerateBody/GenerateSettings/LowercaseLetter';
import Numbers from './Components/GenerateBody/GenerateSettings/Numbers';
import Symbols from './Components/GenerateBody/GenerateSettings/Symbols';
import Strength from './Components/GenerateBody/GenerateStrength/Strength';
import ButtonGenerate from './Components/GenerateBody/GenerateButton/ButtonGenerate';
import Alert from './Components/Alert/Alert';

function App() {
  return (
    <div className="background">
      <div className="borderPage">
        <Header />
        <ShowGenerate />
        <div className="generate-area">
          <GenerateLengthDisplay />
          <CharacterLength />
          <div className="options">
            <UppercaseLetter />
            <LowercaseLetter />
            <Numbers />
            <Symbols />
          </div>
          <Strength />
          <ButtonGenerate />
        </div>
      </div>
      <Alert />
    </div >
  );
}

export default App;
