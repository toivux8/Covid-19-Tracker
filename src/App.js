import { useEffect, useState } from "react";
import { getCountry } from "./api";
import CountrySelection from "./components/CountrySelection";
import Highlights from "./components/Highlights";
import Summary from "./components/Summary";
import {getCountries} from './api'

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(res =>{
        console.log(res);
        setCountries(res.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>COVID 19 TRACKER</h1>
      <CountrySelection countries = {countries} />
      <Highlights />
      <Summary />
    </div>
  );
}

export default App;
