import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'

const Countries = () => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

           

    }, [])

    const handleVisitedCountry = country =>{
       const newArr=[...visitedCountries, country];
        setVisitedCountries(newArr);
        
    }
    return (<>
        <h2>Countries: {countries.length}</h2>
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <ol className="visitedCountry">
{
    
    visitedCountries.map(country => <li key={country.cca3}><h5>{country.name.common}</h5><img className="flag" src={country.flags.png} alt="" /></li>)
}
        </ol>
        <div className="countries">
            {
                countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)

            }
        </div>

    </>

    );
};

export default Countries;