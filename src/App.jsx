import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateAccount from './views/CreateAccount/CreateAccount';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';
import Login from './views/Login/Login';
import Header from './components/Layout/Header/Header';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Home exact path="/" />
          <CreateAccount path="/register">
            <Auth />
          </CreateAccount>
          <Login path="/login">
            <Auth />
          </Login>
          <Profile path="/profile" />
        </Switch>
      </Router>
    </>
  );
}
