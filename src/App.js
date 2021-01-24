import Main from './routes/main/Main';
import Details from './routes/details/Details'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/'
          component={Main}
          exact
        />
        <Route
          path='/details/:id'
          component={Details}
        />
      </Switch>
    </Router>
  );
}

export default App;
