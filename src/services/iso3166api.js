import { authHeader } from "../helpers/AuthHeaders";

const urlApi ='https://localhost:44365/api/'
export const iso3166api = {
    getAll,
    deleteCountry,
    getCountry,
    getCountryStates, 
    UpdateCountry,
    addCountry,
    deleteState,
    UpdateState,
    addCountryState,
    Register
};


//ACCOUNT----------------
function Register (user) {
 

  const url = 'account/register'
  
  return  fetch(urlApi + url, {
    // mode:'no-cors',    
    method:'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
    })
  .then(async res => {
     let data = await res.json()
     console.log(data)
     
     if (!res.ok) {
        data = data.map(res=>res.description + "\n"); 
       throw Error(data)
     }

     return data

  })
}


//COUNTRIES---------

function getAll(page, maxPerPage) {
    const url = 'countries?Page=' + page + '&RecordsPerPage=' + maxPerPage
    let totalItems =0;

  return  fetch(urlApi + url, {
        // mode:'no-cors',    
        method:'GET', 
        headers: authHeader()
       })
     
      .then(
        (result) =>{ 
          totalItems = parseFloat(result.headers.get('totalitems'))
          result = result.json()
          return result
        }
      )
      .then (res => {
         const  obj =  {totalItems:totalItems,
                       res: res
               } 
             return obj
      })
      .catch(err  => console.log(err));
    
}

 function deleteCountry(id) {
  const url = 'countries/' + id
  return  fetch(urlApi + url, {
    // mode:'no-cors',    
    method:'DELETE', 
    headers:new Headers( authHeader())
    })
  .then(res => res.json())
  .then(
    (result) =>{ 
        return result
    }
  )
  .catch((err)  => {return err});


 }

 function getCountry(id) {
  const url = 'countries/' + id
  return  fetch(urlApi + url, {
    // mode:'no-cors',    
    method:'GET', 
    headers:new Headers( authHeader())
    })
  .then(res => res.json())
  .then(
    (result) =>{ 
        return result
    }
  )
  .catch((err)  => {return err});

}


function getCountryStates(id) {
  
  
  const url = 'countries/' + id + '/states'
  return  fetch(urlApi + url, {
    // mode:'no-cors',    
    method:'GET', 
    headers:new Headers( authHeader())
    })
  .then(res => res.json())
  .then(
    (result) =>{ 
       
        return result
    }
  )
  .catch((err)  => {return err});

}


function UpdateCountry(id,row) {
  const url = 'countries/' + id 
  return  fetch(urlApi + url, {
    // mode:'no-cors',    
    method:'PUT', 
    headers:new Headers( authHeader()),
    body: JSON.stringify(row)
    })
  .then(res => res.json())
  .then(
    (result) =>{ 
        return result
    }
  )
  .catch((err)  => {return err});

}


function addCountry (country) {
  
  const url = 'countries'
  return  fetch(urlApi + url, {
    // mode:'no-cors',    
    method:'POST', 
    headers:new Headers( authHeader()),
    body: JSON.stringify(country)
    })
  .then(async res => {
     const data = await res.json()
     
     if (!res.ok) {
       
       throw Error(data)
     }

     return data

  })

  

}

//STATE---------------------------------------------------------------
function  deleteState(id) {
  
    const url = 'states/' + id
    return  fetch(urlApi + url, {
      // mode:'no-cors',    
      method:'DELETE', 
      headers:new Headers( authHeader())
      })
    .then(res => res.json())
   
   
    .catch((err)  => {return err});
  

}

function UpdateState(id,state) {
  const url = 'states/' + id 
  return  fetch(urlApi + url, {
    // mode:'no-cors',    
    method:'PUT', 
    headers:new Headers( authHeader()),
    body: JSON.stringify(state)
    })
  .then(res => res.json())
  .then(
    (result) =>{ 
  
        return result
    }
  )
  .catch((err)  => {return err});

}

function addCountryState(state) {
  const url = 'states' 
  return  fetch(urlApi + url, {
    // mode:'no-cors',    
    method:'POST', 
    headers:new Headers( authHeader()),
    body: JSON.stringify(state)
    })
    .then(async res => {
      const data = await res.json()
      
      if (!res.ok) {
        
        throw Error(data)
      }
 
      return data
 
   })

}