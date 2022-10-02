import React  from 'react';
import "./country.css"

function Country(props) {
    const {name, flags,capital,population} = props.country;
    const handleAddCountry = props.handleAddCountry;
    console.log(props)
    
    return (
        <div className='country'>
           <h2>{name.common}</h2>
           <h4>{capital}</h4>
           <img src={flags.svg} alt="Flags" />
           <p>{population}</p>
           <button onClick={()=> handleAddCountry(props.country)} className='btn'>Add country</button>
        </div>
    );
}

export default Country;