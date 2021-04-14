
import './App.css';
import PlayerAction from './Component/Players/PlayerAction';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

function App() {
  return (
<Router basename="/gb/sponsor-portal/">
            <Switch>
                <Route path="/public">
                   <PlayerAction/>
                </Route>
                <Route>
                    <Redirect to="/public" />
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
