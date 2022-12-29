import Filters from "../Filters/Filters";
import "./App.scss";
import fwt from "../../resources/fwt.svg";
import changeTheme from "../../resources/change-theme.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <a href="#logo">
            <img src={fwt} alt="logo" />
          </a>
        </div>
        <div className="App-changetheme">
          <img src={changeTheme} alt="change theme" width={20} height={20} />
        </div>
      </header>
      <main className="main">
        <Filters />
      </main>
    </div>
  );
}

export default App;
