import React from 'react'
import { FormLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './StateItem.css'

export const StateItem = ({id, code,  subdivisionName, subdivisionCategory}) => {
    
    
    return  (
        <div className="d-inline-flex py-2">
            <FormLabel className="itemDetail">{code}</FormLabel>
            <FormLabel className="itemDetail">{subdivisionName}</FormLabel>
            <FormLabel className="itemDetail">{subdivisionCategory}</FormLabel>
            <Link className="mx-5" to={"/worker/" + id} className="btn btn-primary py-1">Ver Detalle...</Link>
            <button  className="btn btn-danger mx-3" >Remove</button>
        </div>
    )
}