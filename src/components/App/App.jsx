import Filters from "../Filters/Filters";
import Content from "../Content/Content";
import Pagination from "../Pagination/Pagination";
import Header from "../Header/Header";
import Layot from "./Layout";
import { ThemeProvider } from "../../providers/ThemeProvider";
import "./App.scss";
import {  GetDataProvider } from "../../providers/GetDataProvider";



const App = () => {
  

  return (
    <ThemeProvider>
        <GetDataProvider>
          <Layot>
            <div className="App">
                <main className="main">
                <Header />
                  <Filters />
                  <Content />
                  <Pagination />
                </main>
            </div>
           </Layot>
        </GetDataProvider>
      </ThemeProvider>
  );
};

export default App;
