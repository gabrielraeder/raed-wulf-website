import { Route, Switch } from 'react-router-dom';
import './App.css';
import Provider from './Context/Provider';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </Provider>
  );
}

export default App;
