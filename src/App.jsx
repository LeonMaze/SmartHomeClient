import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.sass";
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Light from './pages/Light';
import Devices from './pages/Devices';
import Statistics from './pages/Statistics';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="page-wrapper">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/devices">
              <Devices />
            </Route>
            <Route path="/light">
              <Light />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
