export function authHeader() {
    // return authorization header with basic auth credentials
   // let user = JSON.parse(localStorage.getItem('user'));

    //if (user && user.authdata) {
        return { 'Content-Type': 'application/json' ,
        'Accept': 'application/json',
     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZG9tYWluLmNvbSIsImV4cCI6MTY2MzcyODcxNn0.1gHfUyw_u45oOkq14Xh92lgTzpmbKHBuCyf5qEZs3tw'};
    //} else {
      //  return {};
    //}
}