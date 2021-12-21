import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Drawer from "./components/Drawer";
import Main from "./components/Main";
import Login from "./components/login/Login";
import Navbarr from "./components/Navbarr";
import TraerNoticias from "./components/TraerNoticias";
import Users from "./components/admin/Users";
import Register from "./components/login/Register";
import { Redactar } from "./components/redactor/Redactar";

function App() {
  return (
    <body>
      <BrowserRouter>
        <div class="layer"></div>
        <div class="page-flex">
          <Drawer />
          <div className="main-wrapper">
            <Navbarr />
            <Switch>
              <Route path="/" exact component={TraerNoticias} />
              <Route path="/users" exact component={Users} />
              <Route path="/admin" component={Main} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/redactar" component={Redactar} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </body>
  );
}

export default App;
