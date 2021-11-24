import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./App.sass";
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard';
import Homes from './pages/Homes';
import Devices from './pages/Devices';
import Statistics from './pages/Statistics';
import Rooms from './pages/Rooms';
import Home from './pages/Home';
import Device from './pages/Device';

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <div className="page-wrapper">
          <Switch>
            <Route exact path="/homes/:id">
              <Home />
            </Route>
            <Route exact path="/homes">
              <Homes />
            </Route>
            <Route exact path="/rooms">
              <Rooms />
            </Route>
            <Route exact path="/statistics">
              <Statistics />
            </Route>
            <Route exact path="/devices">
              <Devices />
            </Route>
            <Route exact path="/devices/:identifier">
              <Device />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
