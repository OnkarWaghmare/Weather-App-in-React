import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const CityInput = ({city,setCity,fetchCityWeather}) => {
    
    const [error,setError]=useState("")
    const handleInputChange=(event)=>{
        setCity(event.target.value);
    }
    //console.log(city);
    const handleSubmit=()=>{
        if(!city){
            setError("City field is empty!")
        }else{
            setError("");
            {fetchCityWeather()};
        }
    }
    return (
        <Form>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control value={city} 
            type="text" placeholder="Enter City" 
            onChange={handleInputChange}/>
            <p className="text-danger">{error}</p>
        </Form.Group>
        

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    );
};

export default CityInput;