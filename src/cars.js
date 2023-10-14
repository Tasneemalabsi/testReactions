import CardComp from "./card";
import { useState } from 'react';

import './card.css';
import data from './data.json';

function Cars(){
    let [selectProducts, setSelectProducts] = useState('All');

    function chageProducts(event){
        setSelectProducts(event.target.value);
    }

    let filteredCars = data;
    if (selectProducts !== 'All') {
        filteredCars = data.filter(function (item) {
            return item.type === selectProducts;
        });
    } 
    console.log('Filtered Cars:', filteredCars);
    console.log('Selected Product:', selectProducts);

    return(

        <>
 

<select id="select-Products"  onChange={chageProducts} value={selectProducts}>
                <option value="All">All</option><br/>

                <option value="car">Cars</option>
                <option value="motorcycle">Motorcycles</option>
             
            </select>

       
        <div id='contantCar'>
        {filteredCars.map(function (item) {
                    return (
            <CardComp
            // Ensure you have a unique key for each CardComp
            type={item.type}
            image={item.image}
            make={item.make}
            model={item.model}
            description={item.description}
            year={item.year}
            color={item.color}
            price={item.price}
            transmission={item.transmission}
            CartView={true}
            />

        )
    }
    )
}
        </div>
        </>
    )
}


export default Cars;
