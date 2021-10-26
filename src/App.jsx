import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.sass";
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Statistic from './pages/Statistics';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
