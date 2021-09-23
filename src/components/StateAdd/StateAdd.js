import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import { iso3166api } from '../../services/iso3166api'
import Swal from 'sweetalert2'

export const StateAdd = () => {

    console.log("entre")

    const {id} = useParams()

    console.log(id)
    
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
            console.log('entre al error del add')
                console.log(err)
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
                <Form.Control type="text"  placeholder="Enter Alpha2Code" name="subdivisionCategory"  value={values.subdivisionCategory} onChange={handleInputChange} /> 
            </div>

            <button className="btn btn-primary" onClick={handleAddClick}>add</button>
        </div>
    )
}
