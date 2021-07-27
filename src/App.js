import React, { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./components/api";
import CountrySelection from "./components/CountrySelection";
import Highlights from "./components/Highlights";
import Summary from "./components/Summary";
import {sortBy} from 'lodash'
import { Typography, Container } from "@material-ui/core";
import moment from "moment";


function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) =>{

      const countries = sortBy(res.data, 'Country');
        setCountries(countries);

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
    <Container style = {{marginTop: 20}}>
      <Typography variant="h2" component="h2" >
        COVID-19 Update In The World
      </Typography>
      <Typography> {moment().format('LLL')} </Typography>
      <CountrySelection countries = {countries} handleOnChangeCountry = {handleOnChangeCountry} value = {selectedCountryId} />
      <Highlights report = {report} />
      <Summary countryId={selectedCountryId} report = {report}/>
    </Container>
  );
}

export default App;
