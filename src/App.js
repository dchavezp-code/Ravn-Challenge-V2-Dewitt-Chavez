import Main from './routes/main/Main';
import PersonDetails from './routes/person-details/PersonDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/person-details/:id'
          component={PersonDetails}
        />
        <Route
          path='/'
          component={Main}
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
