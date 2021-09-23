import React, {useEffect, useMemo, useState} from 'react'
import { iso3166api } from '../../services/iso3166api';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import {RiEditLine} from 'react-icons/ri'
import {MdDelete} from 'react-icons/md'
import { ModalCountryModify } from '../ModalCountryModify/ModalCountryModify';

// import { createProxyMiddleware } from 'http-proxy-middleware';

export const CountryListContainer = () => {
    const [countries, setCountries] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPerPage, setMaxPerPage] = useState(10);
    const [totalRows, setTotalRows] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [modalInfo, setModalInfo] = useState([]);
    
    const handleDeleteClick = (e,id) => {
		
        e.preventDefault();
         iso3166api.deleteCountry(id).then( (res) => {getAllCountries(page, maxPerPage)}
        )
        .catch(err=>console.log(err))
        //muestro el resultado
        
	};
    const handleUpdate = () => {
        iso3166api.UpdateCountry(modalInfo.id, modalInfo).then( (res) => {
            getAllCountries(page, maxPerPage)
            toggleTrueFalse()
        })
        .catch(err=>console.log(err))

    }
    const handleEditClick = (e, row) => {
        console.log(row)
        setModalInfo(row)
        toggleTrueFalse()
        
        //llamo al servicio
    //setisopen.
    }

    const toggleTrueFalse = () => {
        setIsOpen(!isOpen)
        //llamo al servicio
    //setisopen.
    }
    const columns = useMemo(
		() => [
            {
				name: 'Country Name',
				selector: row => row.countryName,
				sortable: true,
				grow: 2,
			},
			{
				name: 'Short Name',
				selector: row => row.shortName,
				sortable: true,
			},
			{
				name: 'Alpha 2 Code',
				selector: row => row.alpha2Code,
				sortable: true,
				right: true,
			},
			{
				name: 'Alpha 3 Code',
				selector: row => row.alpha3Code,
				sortable: true,
				right: true,
			},
			{
				name: 'Numeric Code',
				selector: row => row.numericCode,
				sortable: true,
				right: true,
			},
			{
				name: 'Remarks',
				selector: row => row.remarks,
				sortable: true,
				right: true,
			},
			{
				name: 'Independent',
				selector: row => row.independent == 1 ? 'yes' : 'no',
				sortable: true,
				right: true,
			},
            {
                 cell: (row) => <button className="btn btn-warning"  onClick={(e) => handleEditClick(e,row)}><RiEditLine/></button>, // onClick={handleButtonClick}
				ignoreRowClick: true,
				allowOverflow: true,
				button: true,
            },
            {
                cell: (row) => <button className="btn btn-danger"  onClick={(e) => handleDeleteClick(e,row.id)}><MdDelete/></button>, // onClick={handleDeleteClick}
               ignoreRowClick: true,
               allowOverflow: true,
               button: true,
           },
            
            {
                cell: (row) => <Link to={"/CountryStates/" + row.id} className="btn btn-primary">States</Link>, // onClick={handleDeleteClick}
               ignoreRowClick: true,
               allowOverflow: true,
               button: true,
           }

			
		],
		[],
	);
    
    const handlePageChange = page => {
		getAllCountries(page, maxPerPage);
	};

    const handlePerRowsChange = async (newPerPage, page) => {
		setLoading(true);
        console.log(newPerPage)
        console.log(page)
        setMaxPerPage(newPerPage);
		
        getAllCountries(page,newPerPage);
        
        console.log("handlePerRows")
        
      
		// setCountries(response.res);
		
		setLoading(false);
	};

const getAllCountries = (page, maxPerPage) => {
    iso3166api.getAll(page,maxPerPage, setPage).then(res=> { 
        
        console.log(res)
        setTotalRows(res.totalItems)
        setCountries(res.res)
    
    })
        .catch(err=> console.log(err))
        
        setLoading(false)
}


useEffect( () => {

    setLoading(true)

    getAllCountries(page,maxPerPage)

    },[])


    return (
        <>
        { loading ? <h2>"loading Countries"</h2>
        :
        <div className="container justy-content-center py-5">
            <div className="d-flex justify-content-end">
                <Link to="/countries" className="btn btn-primary text-right">Add Country</Link>
            </div>

           <DataTable title="Countries" 
            data= {countries}
            columns={columns}
            pagination
            paginationServer
			paginationTotalRows={totalRows}
			onChangeRowsPerPage={handlePerRowsChange}
			onChangePage={handlePageChange}
          
            />
            <ModalCountryModify isOpen={isOpen} handleClose={toggleTrueFalse} setModalInfo={setModalInfo} modalInfo={modalInfo} handleUpdate={handleUpdate}/>
          
        </div>
            
        }
        </>
    )




}