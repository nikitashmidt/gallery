import Filters from "../Filters/Filters";
import Content from "../Content/Content";
import Pagination from "../Pagination/Pagination";
import Header from "../Header/Header";
import Layot from '../../provider/Layout';
import { ThemeProvider } from "../../provider/ThemeProvider";
import "./App.scss";

const App = () => {


  return (
    <ThemeProvider>
      <Layot>
        <div className="App">
          <Header/>
          <main className="main">
            <Filters />
            <Content/>
            <Pagination/>
          </main>
        </div>
     </Layot>
    </ThemeProvider>
  );
}

export default App;
