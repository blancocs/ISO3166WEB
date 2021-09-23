export function authHeader() {
    let bearer = JSON.parse(localStorage.getItem('Bearer'));
   
        return { 'Content-Type': 'application/json' ,
        'Accept': 'application/json',
     'Authorization': 'Bearer ' + bearer};
  
}