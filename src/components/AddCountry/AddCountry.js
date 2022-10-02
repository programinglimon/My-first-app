import React from 'react';

const AddCountry = (props) => {
    const population =props.addCountry;

    let totalPopulation =0;
    for (let i = 0; i < population.length; i++) {
        const country = population[i];
        totalPopulation = totalPopulation + country.population
        
    };
    console.log(totalPopulation);
    return (
        <div>
            <h2>All country population {totalPopulation} </h2>
            
        </div>
    );
};

export default AddCountry;