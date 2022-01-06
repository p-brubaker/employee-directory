import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateAccount from './views/CreateAccount/CreateAccount';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';
import Login from './views/Login/Login';
import Header from './components/Layout/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <CreateAccount>
              <Auth />
            </CreateAccount>
          </Route>
          <Route path="/login">
            <Login>
              <Auth />
            </Login>
          </Route>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}
