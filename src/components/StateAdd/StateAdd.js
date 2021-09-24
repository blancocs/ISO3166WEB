import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import { iso3166api } from '../../services/iso3166api'
import Swal from 'sweetalert2'

export const StateAdd = () => {

    const {id} = useParams()

   
    const [values, setValues] = useState({
        code: '',
        subdivisionName: '',
        subdivisionCategory: '',
        countryId:id
    })

    const history = useHistory()

    const handleAddClick = () => {
        iso3166api.addCountryState(values).then (
            (res)=> {
                Swal.fire({
                    icon: 'success',
                    title: 'State added!',
                    text: `New State: ${values.subdivisionName}`,
                    confirmButtonText: 'close'
                })
                
                history.push("/CountryStates/" + id)
            }
        ).catch ((err) => {
            Swal.fire({
                icon: 'Error',
                title: 'ouh we have a problem!',
                text: ` ${err.toString()}`,
                confirmButtonText: 'close'
            })
            
        }) 
    }

    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    

    return  (
        <div className="container w-25">
            <div className="py-1">
                <Form.Label>State Code</Form.Label>
                <Form.Control type="text" maxLength="2" placeholder="Enter Country Name" name="code"  value={values.code} onChange={handleInputChange} /> 
            </div>

            <div className="py-1">
                <Form.Label>Subdivision Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Short Name" name="subdivisionName"  value={values.subdivisionName} onChange={handleInputChange} /> 
            </div>

            <div className="py-1 pb-3">
                <Form.Label>Subdivision Category</Form.Label>
                <Form.Control type="text"  placeholder="Enter Subdivision Category" name="subdivisionCategory"  value={values.subdivisionCategory} onChange={handleInputChange} /> 
            </div>

            <button className="btn btn-primary" onClick={handleAddClick}>add</button>
        </div>
    )
}
