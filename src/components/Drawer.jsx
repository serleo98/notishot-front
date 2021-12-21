import React from "react";
import Cookies from "universal-cookie";

const Drawer = () => {
  const cookies = new Cookies();
  return (
    <>
      {cookies.get("role_key") === "administrador" ? (
        <aside className="sidebar">
          <div className="sidebar-start">
            <div className="sidebar-head">
              <a href="/" className="logo-wrapper" title="Home">
                <span className="sr-only">Inicio</span>
                <span className="icon logo" aria-hidden="true"></span>
                <div className="logo-text">
                  <span className="logo-title">NOTISHOT</span>
                  <span className="logo-subtitle">Panel de Admin</span>
                </div>
              </a>
              <button
                className="sidebar-toggle transparent-btn"
                title="Menu"
                type="button"
              >
                <span className="sr-only">Menu</span>
                <span className="icon menu-toggle" aria-hidden="true"></span>
              </button>
            </div>
            <div className="sidebar-body">
              <ul className="sidebar-body-menu">
                <li>
                  <a className="active" href="/">
                    <span className="icon home" aria-hidden="true"></span>
                    Reportes
                  </a>
                </li>
                <li>
                  <a className="show-cat-btn" href="##">
                    <span className="icon document" aria-hidden="true"></span>
                    Publicaciones
                    <span
                      className="category__btn transparent-btn"
                      title="Open list"
                    >
                      <span className="sr-only">Lista</span>
                      <span
                        className="icon arrow-down"
                        aria-hidden="true"
                      ></span>
                    </span>
                  </a>
                  <ul className="cat-sub-menu">
                    <li>
                      <a href="/admin">Todo Notishot</a>
                    </li>
                    <li>
                      <a href="new-post.html">Evaluados</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="show-cat-btn" href="##">
                    <span className="icon folder" aria-hidden="true"></span>
                    Usuarios
                    <span
                      className="category__btn transparent-btn"
                      title="Open list"
                    >
                      <span className="sr-only">Open list</span>
                      <span
                        className="icon arrow-down"
                        aria-hidden="true"
                      ></span>
                    </span>
                  </a>
                  <ul className="cat-sub-menu">
                    <li>
                      <a href="/users">Todos los usuarios</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <span className="system-menu__title">Sistema</span>
              <ul className="sidebar-body-menu">
                <li>
                  <a href="appearance.html">
                    <span className="icon edit" aria-hidden="true"></span>
                    Apariencias
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer">
            <a href="##" className="sidebar-user">
              <span className="sidebar-user-img">
                <picture>
                  <source
                    srcset="./img/avatar/avatar-illustrated-01.webp"
                    type="image/webp"
                  />
                  <img
                    src="./img/avatar/avatar-illustrated-01.png"
                    alt="User name"
                  />
                </picture>
              </span>
              <div className="sidebar-user-info">
                <span className="sidebar-user__title">Nafisa Sh.</span>
                <span className="sidebar-user__subtitle">Support manager</span>
              </div>
            </a>
          </div>
        </aside>
      ) : (
        <></>
      )}
    </>
  );
};

export default Drawer;
