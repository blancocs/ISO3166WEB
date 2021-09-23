import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { iso3166api } from '../../services/iso3166api';
import { StateItem } from '../StateItem/StateItem';
import { ModalStateModify } from '../ModalStateModify/ModalStateModify';
import { Link } from 'react-router-dom';
import { FormLabel } from 'react-bootstrap';


export const StateListContainer = () => {
    
    const {id} = useParams()
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(false);

    const [modalInfo, setModalInfo] = useState({
        id: '',
        code: '',
        subdivisionName: '',
        subdivisionCategory:'',
        countryId:'',
    })

    const [isOpen, setIsOpen] = useState(false);

    const handleDeleteClick =(e, id, countryID) => {
		
        e.preventDefault();
        iso3166api.deleteState(id).then( (res) => {getAllCountryStates(countryID)}
        )
        .catch(err=>console.log(err))
     
        
	};

    const handleEditClick = (e,id,code,subdivisionName,subdivisionCategory, countryId) => {
        setModalInfo({
            id: id,
            code: code,
            subdivisionName: subdivisionName,
            subdivisionCategory:subdivisionCategory,
            countryId:countryId
        })

        toggleTrueFalse()
        
   
    }

    const toggleTrueFalse = () => {
        setIsOpen(!isOpen)
    
    }

    const handleUpdate = () => {
       
        iso3166api.UpdateState(modalInfo.id, modalInfo).then( (res) => {
            getAllCountryStates(modalInfo.countryId)
            toggleTrueFalse()
        })
        .catch(err=>console.log(err))

    }

    const getAllCountryStates = (idCountry) => {
        iso3166api.getCountryStates(idCountry).then(res=> { 
            setStates(res)
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
                
                <h1>States</h1>
                <div className="d-flex justify-content-end">
                    <Link to={"/newState/" + id} className="btn btn-primary text-right">Add State</Link>
                </div>

                <div className="d-inline-flex py-2">
                    <FormLabel className="itemDetail"><strong>Code</strong></FormLabel>
                    <FormLabel className="itemDetail"><strong>Subdivision Name</strong></FormLabel>
                    <FormLabel className="itemDetail"><strong>Subdivision Category</strong></FormLabel>
            </div>

                {states.length > 0 ?  states.map((state) =>  <StateItem key={state.id} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick}  {...state}/>)
                :
                ''    
            }
             
            </div>

            <ModalStateModify isOpen={isOpen} handleClose={toggleTrueFalse}  setModalInfo={setModalInfo} modalInfo={modalInfo} handleUpdate={handleUpdate}/>
        </div>
    )
}