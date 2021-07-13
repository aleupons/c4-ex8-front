import { useState } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Inici } from "./pagines/Inici";
import { Llistat } from "./pagines/Llistat";
import { Login } from "./pagines/Login";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="container-fluid">
      <Router>
        <Header login={login} setLogin={setLogin} />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/principal" />
            {!login && <Redirect to="/login" />}
          </Route>
          <Route path="/principal" exact>
            <Inici />
            {!login && <Redirect to="/login" />}
          </Route>
          <Route path="/llistat" exact>
            <Llistat />
            {!login && <Redirect to="/login" />}
          </Route>
          <Route path="/login" exact>
            <Login setLogin={setLogin} />
            {login && <Redirect to="/principal" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
