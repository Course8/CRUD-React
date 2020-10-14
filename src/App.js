import React from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import routesConfig from "./routesConfig";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link className="px-1" to="/">Home</Link>
          <Link className="px-1" to="/user">User</Link>
          <Link className="px-1" to="/login">Login</Link>
        </nav>
      </header>
      {routesConfig.map(
        (value, key) => {
          return <Route key={key} path={value.path} component={value.component} exact={value.exact}
          ></Route>
        }
      )}
    </div>
  );
}

export default App;
