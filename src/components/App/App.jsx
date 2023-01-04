import Filters from "../Filters/Filters";
import Content from "../Content/Content";
import Pagination from "../Pagination/Pagination";
import Header from "../Header/Header";
import Layot from '../../providers/Layout';
import "./App.scss";
import { ThemeProvider } from "../../providers/ThemeProviders";
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
