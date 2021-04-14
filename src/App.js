
import './App.css';
import PlayerAction from './Component/Players/PlayerAction';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import HandleLogin from './Component/Players/HandleLogin';
import Login from './Component/Players/Login';

function App() {
  return (
<Router basename="/gb/sponsor-portal/">
            <Switch>
                <Route path="/public">
                   <PlayerAction/>
                </Route>
                <Route path="/handleLogin">
                    <HandleLogin />
                </Route>
                <Route>
                    <Login />
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
