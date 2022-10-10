import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

const Login = () => {
  const cookies = new Cookies();
  const history = useHistory();
  const API = "https://notishotapi.herokuapp.com/api/v1/login";
  const [state, setState] = React.useState({
    form: {
      username: "",
      password: "",
    },
  });
  const handleChange = async (e) => {
    await setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  const enviarRegistrar = () => {
    history.push("/register");
  };
  const enviarPortal = () => {
    history.push("/");
  };
  const iniciarSesion = async () => {
    await axios
      .post(API, {
        email: state.form.username,
        password: state.form.password
      })
      .then((response) => {
        console.log(response);
        cookies.set("id", response.data.data.role.id, { path: "/" });
        cookies.set("nick_name", response.data.data.nick_name, { path: "/" });
        cookies.set("role_key", response.data.data.role.role_key, { path: "/" });
        cookies.set("token", response.data.data.token, { path: "/" });
        window.location.href = "/users";
      })
      .catch((error) => {
        console.log(error);
        alert("Contraseña o Usuario incorrecto");
      });
  };
  return (
    <>
      <div className="layer"></div>
      <main className="page-center">
        <article className="sign-up">
          <h1 className="sign-up__title" color="black">Iniciar Sesion en NOTISHOT</h1>
          <div className="sign-up-form form">
            <label className="form-label-wrapper">
              <p className="form-label">Email</p>
              <input
                className="form-input"
                type="name"
                name="username"
                placeholder="Ingrese su mail"
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-label-wrapper">
              <p className="form-label">Password</p>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Ingresar contraseña"
                onChange={handleChange}
                required
              />
            </label>
            <button
              className="form-btn primary-default-btn transparent-btn"
              onClick={iniciarSesion}
            >
              Iniciar Sesión
            </button>
            <button
              className="form-btn primary-default-btn transparent-btn mt-3"
              onClick={enviarRegistrar}
            >
              Registrarse
            </button>
            <button
              className="form-btn primary-default-btn transparent-btn mt-3"
              onClick={enviarPortal}
            >
              Noticias
            </button>
          </div>
        </article>
      </main>
    </>
  );
};

export default Login;
