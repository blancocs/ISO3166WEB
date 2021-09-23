import './App.css';
import { AppProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CountryListContainer } from './components/CountryListContainer/CountryListContainer';

// import { CountryContainer } from './components/CountryContainer/CountryContainer';
import { StateListContainer } from './components/StateListContainer/StateListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { CountryItem } from './components/CountryItem/CountryItem';
import { StateAdd } from './components/StateAdd/StateAdd';

function App() {
  return (
    <div>
      <AppProvider>
        <BrowserRouter>
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
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
