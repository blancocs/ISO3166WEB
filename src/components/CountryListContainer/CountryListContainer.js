
import React, {useEffect, useMemo, useState} from 'react'
import { iso3166api } from '../../services/iso3166api';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

// import { createProxyMiddleware } from 'http-proxy-middleware';

export const CountryListContainer = () => {
    const [countries, setCountries] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPerPage, setMaxPerPage] = useState(5);
    const [loading, setLoading] = useState(false);

    const handleButtonClick = (e,id) => {
		
        e.preventDefault();
        
        iso3166api.deleteCountry(id).then( (res) => {getAllCountries()}
            
        )
        .catch(err=>console.log(err))



        //muestro el resultado

        

		console.log('clicked');
        console.log(id);
        
	};

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
                 cell: (row) => <button className="btn btn-danger"  onClick={(e) => handleButtonClick(e,row.id)}>Delete</button>, // onClick={handleButtonClick}
				ignoreRowClick: true,
				allowOverflow: true,
				button: true,
            },

            {
                cell: (row) => <Link to={"/CountryStates/" + row.id} className="btn btn-primary">States</Link>, // onClick={handleButtonClick}
               ignoreRowClick: true,
               allowOverflow: true,
               button: true,
           }

			
		],
		[],
	);

const getAllCountries = (page, maxPerPage) => {
    iso3166api.getAll(1,5).then(res=> { 
        setCountries(res)})
        .catch(err=> console.log(err))
        
        setLoading(false)
}


useEffect( () => {

    setLoading(true)

    getAllCountries(1,5)

    },[])


    return (
        <>
        { loading ? <h2>"loading Countries"</h2>
        :
        <div className="justy-content-center">
            <DataTable title="Countries" 
            data= {countries}
            columns={columns}
            
            
            />
        </div>
            // <CountryList countriesList={countries}/>
        }
        </>
    )

    // fetch('https://localhost:44365/api/countries',{
    //   method: 'POST',
    //   headers:{'Content-type':'application/json'},
    //     body: empInfo
    // }).then(r=>r.json()).then(res=>{
    //   if(res){
    //     this.setState({message:'New Employee is Created Successfully'});
    //   }
    // });


}