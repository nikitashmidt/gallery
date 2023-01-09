import Filters from "../Filters/Filters";
import Content from "../Content/Content";
import Pagination from "../Pagination/Pagination";
import Header from "../Header/Header";
import Layot from "./Layout";
import { ThemeProvider } from "../../providers/ThemeProvider";
import "./App.scss";
import {  GetDataProvider } from "../../providers/GetDataProvider";
import { useEffect, useState } from "react";
import Spinner from "../spinners/Spinner";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(true ); 
  useEffect(() => {
    setIsLoaded(true);
    document.body.style.overflow = 'hidden';
  }, []);
  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        document.body.style.overflow = '';
        setIsPageLoaded(false);
      }, 1500);
    }
  }, [isLoaded]);
  return (
    <ThemeProvider>
      <GetDataProvider>
        <Layot>
          {isPageLoaded ? <Spinner content={ true} /> : ''}
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
