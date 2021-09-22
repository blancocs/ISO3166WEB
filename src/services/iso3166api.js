import { authHeader } from "../helpers/AuthHeaders";

const urlApi ='https://localhost:44365/api/'
export const iso3166api = {
    getAll,
    deleteCountry,
    getCountry,
    getCountryStates
};

function getAll(page, maxPerPage) {
    const url = 'countries?Page=' + page + '&RecordsPerPage=' + maxPerPage
    
  return  fetch(urlApi + url, {
        // mode:'no-cors',    
        method:'GET', 
        headers: authHeader()
       })
     
      .then(
        (result) =>{ 
          result = result.json()
            return result
        }
      )
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
      // console.log(result)
        return result
    }
  )
  .catch((err)  => {return err});



}