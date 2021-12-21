import React from "react";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

const Navbarr = () => {
  const cookies = new Cookies();
  const history = useHistory();
  const cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("nick_name", { path: "/" });
    cookies.remove("role_key", { path: "/" });
    cookies.remove("token", { path: "/" });
    history.push("/");
    window.location.reload(true);
  };
  const enviarLogin = () => {
    history.push("/login");
    window.location.reload(true);
  };
  const enviarRedactar = () => {
    history.push("/redactar");
    window.location.reload(true);
  };
  return (
    <nav className="main-nav--bg">
      <div className="container main-nav">
        <div className="main-nav-end">
          <button
            className="sidebar-toggle transparent-btn"
            title="Menu"
            type="button"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="icon menu-toggle--gray" aria-hidden="true"></span>
          </button>
          <div className="lang-switcher-wrapper">
            <button className="lang-switcher transparent-btn" type="button">
              <i data-feather="chevron-down" aria-hidden="true"></i>
            </button>
          </div>
          <button
            className="theme-switcher gray-circle-btn"
            type="button"
            title="Switch theme"
          >
            <span className="sr-only">Cambiar tema</span>
            <i className="sun-icon" data-feather="sun" aria-hidden="true"></i>
            <i className="moon-icon" data-feather="moon" aria-hidden="true"></i>
          </button>

          {!cookies.get("id") ? (
            <div>
              <button className="btn btn-danger" onClick={enviarLogin}>
                Log In
              </button>
            </div>
          ) : (
            <>
              <button
              className="gray-circle-btn dropdown-btn"
              title="To messages"
              type="button"
              onClick={enviarRedactar}
            >
              <span className="sr-only">To messages</span>
              <span
                className="icon notification active"
                aria-hidden="true"
              ></span>
            </button>
              <div className="nav-user-wrapper">
                <button
                  href="##"
                  className="nav-user-btn dropdown-btn"
                  title="My profile"
                  type="button"
                >
                  <span className="sr-only">Perfil</span>
                  <span className="nav-user-img">
                    <picture>
                      <source
                        srcSet="./img/avatar/avatar-illustrated-02.webp"
                        type="image/webp"
                      />
                      <img
                        src="./img/avatar/avatar-illustrated-02.png"
                        alt="User name"
                      />
                    </picture>
                  </span>
                </button>
                <ul className="users-item-dropdown nav-user-dropdown dropdown">
                  <li>
                    <a href="##">
                      <i data-feather="user" aria-hidden="true"></i>
                      <span>Perfil</span>
                    </a>
                  </li>
                  <li>
                    <a className="danger" href="##" onClick={cerrarSesion}>
                      <i data-feather="log-out" aria-hidden="true"></i>
                      <span>Cerrar Sesion</span>
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;