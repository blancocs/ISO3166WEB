import React from 'react'
import { Link } from 'react-router-dom'

export const CountryItem = ({Id, countryName,  shortName}) => {
    return  (
        <div>
        <p></p>
        <p>{countryName}</p>
        <p>{shortName}</p>
        <Link to={"/worker/" + Id} className="btn btn-primary py-1">Ver Detalle...</Link>
        <button className="btn btn-danger" >Remove</button>
        </div>
    )
}
    
