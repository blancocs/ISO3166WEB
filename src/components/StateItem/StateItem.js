import React from 'react'
import { FormLabel } from 'react-bootstrap'
import './StateItem.css'
import {RiEditLine} from 'react-icons/ri'
import {MdDelete} from 'react-icons/md'

export const StateItem = ({id, code,  subdivisionName, subdivisionCategory, handleDeleteClick, countryId, handleEditClick}) => {
    
    
    return  (
        <div className="d-inline-flex py-2">
            <FormLabel className="itemDetail">{code}</FormLabel>
            <FormLabel className="itemDetail">{subdivisionName}</FormLabel>
            <FormLabel className="itemDetail">{subdivisionCategory}</FormLabel>
            <button className="btn btn-warning mx-2" onClick={(e) => handleEditClick(e,id,code,subdivisionName,subdivisionCategory, countryId)}> <RiEditLine/></button>
            <button className="btn btn-danger" onClick={(e) => handleDeleteClick(e,id,countryId)} ><MdDelete/></button>
            
        </div>
    )
}