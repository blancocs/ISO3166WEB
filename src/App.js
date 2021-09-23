import './App.css';
import { AppProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CountryListContainer } from './components/CountryListContainer/CountryListContainer';

// import { CountryContainer } from './components/CountryContainer/CountryContainer';
import { StateListContainer } from './components/StateListContainer/StateListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { CountryItem } from './components/CountryItem/CountryItem';
import { StateAdd } from './components/StateAdd/StateAdd';
import { useEffect, useState } from 'react';
import { Login } from './Login/Login';



function App() {

  const  getToken = () => {
    console.log(localStorage.getItem('Bearer'))
    return localStorage.getItem('Bearer')
  }
  
const[token, setTokenUpdated] = useState(getToken())
  
const  setToken = (userToken) => {
  localStorage.setItem('Bearer', JSON.stringify(userToken));
  setTokenUpdated(userToken)
}



useEffect( () => {
    

  console.log(token)
},[token])

  
  


  return (

  
  
    <div>
      <AppProvider>
        <BrowserRouter>
        {!token ? <Login setToken={setToken} />
        :
        <>
        <NavBar/> 

        <Switch>
            <Route exact path ="/">
              <div >
                <CountryListContainer/>

              </div>
              </Route>
              
              <Route exact path="/countries">
                <CountryItem/>
              </Route>

              {/* <Route exact path="/countries/:id">
                <CountryContainer/>
              </Route> */}

              <Route exact path="/CountryStates/:id">
                <StateListContainer/>
            </Route>

            
            <Route exact path="/newState/:id">
                <StateAdd/>
              </Route>
        </Switch>
        </>
        }
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
