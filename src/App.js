import React, { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./api";
import CountrySelection from "./components/CountrySelection";
import Highlights from "./components/Highlights";
import Summary from "./components/Summary";

function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then(res =>{
        setCountries(res.data);

        //Default for country VN
        setSelectedCountryId('vn');
      });
  }, []);

  const handleOnChangeCountry = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() =>{
    if(selectedCountryId) {
      const {Slug} = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );

      //call api
      getReportByCountry(Slug).then((res) => 
        setReport(res.data)
      );
    };
  }, [countries, selectedCountryId]);

  return (
    <div className="App">
      <h1>COVID 19 TRACKER</h1>
      <CountrySelection countries = {countries} handleOnChangeCountry = {handleOnChangeCountry} value = {selectedCountryId} />
      <Highlights report = {report} />
      <Summary report = {report}/>
    </div>
  );
}

export default App;
