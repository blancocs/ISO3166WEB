import React from 'react'
import { FormLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './StateItem.css'
import {RiEditLine} from 'react-icons/ri'
import {MdDelete} from 'react-icons/md'

export const StateItem = ({id, code,  subdivisionName, subdivisionCategory, handleDelete}) => {
    
    
    return  (
        <div className="d-inline-flex py-2">
            <FormLabel className="itemDetail">{code}</FormLabel>
            <FormLabel className="itemDetail">{subdivisionName}</FormLabel>
            <FormLabel className="itemDetail">{subdivisionCategory}</FormLabel>
            <button className="btn btn-warning mx-2"> <RiEditLine/></button>
            <button className="btn btn-danger"><MdDelete/></button>
            {/* <Link className="mx-5" to={"/worker/" + id} className="btn btn-primary py-1">RiEditLine</Link>
            <button  className="btn btn-danger mx-3" >Remove</button> */}
        </div>
    )
}