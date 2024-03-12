
import { useState } from 'react';
import './country.css';
const Country = ({country, handleVisitedCountry}) => {
const {name, flags, population, continents, 
    capital, cca3, area
    } = country;
const[visited, setVisited]=useState(false); 
const handleVisited=()=>{
    setVisited(!visited)
    
};

const passWithParams=()=>handleVisitedCountry(country)
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Official Name:  {name.official}</h4>
            <h4>Area: {area} km</h4>
            <h4>Capital: {capital}</h4>
            <h4>Continents: {continents}</h4>
            <h4>Population: {population}</h4>
            <h5>Country code: {cca3}</h5>

            <input onClick={passWithParams}  type="checkbox" name="" id="" />{'Mark as visited'}<br /> <br />

            <button onClick={handleVisited} >{visited? 'Visited' : 'Going'}</button>
            {visited? ` I have visited ${name.common}` : ` I want to visit ${name.common}`}
            
            
            
          
       
        </div>
    );
};

export default Country;