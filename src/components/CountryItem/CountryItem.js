import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { iso3166api } from '../../services/iso3166api'
import Swal from 'sweetalert2'

export const CountryItem = () => {

    const [values, setValues] = useState({
        countryName: '',
        shortName: '',
        alpha2Code: '',
        alpha3Code: '',
        numericCode: 0,
        remarks: '',
        independent: false,
        states:[]
    })

    const history = useHistory()

    const handleAddClick = () => {
        iso3166api.addCountry(values).then (
            (res)=> {
                Swal.fire({
                    icon: 'success',
                    title: 'Country added!',
                    text: `New Country: ${values.countryName}`,
                    confirmButtonText: 'close'
                })
                
                history.push("/");} 
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

    const handlceCheckBox = (e) => {
        const { checked} = e.target
    
        setValues({
            ...values,
            ["independent"]: checked
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
        <div className="py-1 ">
                <Form.Label>Country Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Country Name" name="countryName"  value={values.countryName} onChange={handleInputChange} /> 
                </div>
                <div className="py-1">
                <Form.Label>Short Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Short Name" name="shortName"  value={values.shortName} onChange={handleInputChange} /> 
                </div>
                <div className="py-1">
                <Form.Label>Alpha 2 Code</Form.Label>
                <Form.Control type="text" maxLength="2" placeholder="Enter Alpha2Code" name="alpha2Code"  value={values.alpha2Code} onChange={handleInputChange} /> 
                </div>
                <div className="py-1">
                <Form.Label>Alpha 3 Code</Form.Label>
                <Form.Control type="text" maxLength="3" placeholder="Enter Alpha3Code" name="alpha3Code"  value={values.alpha3Code} onChange={handleInputChange} /> 
                </div>
                <div className="py-1">
                <Form.Label>Numeric Code</Form.Label>
                <Form.Control type="number" placeholder="Enter mumeric Code" name="numericCode"  value={values.numericCode} onChange={handleInputChange} /> 
                </div>
                <div className="py-1">
                <Form.Label>Remarks</Form.Label>
                <Form.Control type="text" placeholder="Enter Remarks" name="remarks"  value={values.remarks} onChange={handleInputChange} /> 
                </div>
                
                <div className="py-1 pb-3">
                <Form.Label>Independent</Form.Label>
                <div className="checkbox checkbox-circle checkbox-color-scheme">
                        <label className="checkbox-checked">
                            <input type="checkbox" value={values.independent} checked={values.independent} onChange={handlceCheckBox}/>
                        </label>
                    </div>
                </div>

                <button className="btn btn-primary" onClick={handleAddClick}>add Country</button>
        </div>
    )
}
