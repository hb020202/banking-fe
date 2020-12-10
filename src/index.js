import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";
import NewAccount from './Components/NewAccount';
import UpdateBalance from './Components/UpdateBalance';
import AddToBalance from './Components/AddToBalance';
import NotFound from './Components/NotFound';
import ViewAllAccs from './Components/ViewAll';
import ViewOne from './Components/ViewOne';
//remember to run npm start


class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/accounts">New Account</Link>
                        </li>
                        <li>
                            <Link to="/accounts/balance">Update balance</Link>
                        </li>
                        <li>
                            <Link to="/accounts/add">Add to balance</Link>
                        </li>
                        <li>
                            <Link to="/viewall">View all here</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/" exact component={ App } />
                        <Route path="/accounts" exact component={ NewAccount } />
                        <Route path="/accounts/balance" exact component={ UpdateBalance } />
                        <Route path="/accounts/add" exact component={ AddToBalance } />
                        <Route path="/viewall" exact component={ ViewAllAccs } />
                        <Route path="/viewall/:id" exact component={ ViewOne } />
                        <Route component={ NotFound } />
                    </Switch>
                </div>
            </Router>
        )
    }
}
ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
