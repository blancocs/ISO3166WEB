import React, { useEffect, useState } from 'react';
import { CountryItem } from '../CountryItem/CountryItem';
import { useParams } from 'react-router';
import { iso3166api } from '../../services/iso3166api';
import { StateItem } from '../StateItem/StateItem';


export const StateListContainer = () => {
    
    const {id} = useParams()
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(false);

  
    console.log("id country")
    console.log(id)

    const getAllCountryStates = (idCountry) => {
        iso3166api.getCountryStates(idCountry).then(res=> { 
            setStates(res)
            console.log("res:")
            console.log(res)
        })
        .catch(err=> console.log(err))
            
        setLoading(false)
    }
    
    
    useEffect( () => {

    setLoading(true)
        getAllCountryStates(id)
    

    },[])


    return (
        <div className="container my-5"> 
            <div className="row justify-content-center p-3">
                { states.map((state) =>  <StateItem key={state.id} {...state}/>)}
             
            </div>
        </div>
    )
}