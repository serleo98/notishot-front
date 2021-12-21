import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

const Users = () => {
  const cookies = new Cookies();
  const history = useHistory();
  if (cookies.get("token") !== "1") {
    const mandarPortal = () => {
      history.push("/");
    };
  }
  const API = "http://notishot.herokuapp.com/api/v1/admin/usuarios";
  const [users, setUsers] = useState([]);
  async function usuariosTraidos() {
    const users = await axios
      .get(API, {
        headers: {
          Authorization: "Bearer " + cookies.get("token"),
        },
      })
      .then((response) => {
        const usuariosMapeadosParaLista = response.data.data.map((item) => {
          return {
            nick_name: item.nick_name,
            email: item.email,
            role: item.role,
            created_at: item.created_at,
            id: item.id,
          };
        });
        console.log(usuariosMapeadosParaLista);
        return usuariosMapeadosParaLista;
      })
      .catch((error) => {
        console.log(error);
      });
    setUsers(users);
  }
  useEffect(() => {
    usuariosTraidos();
  }, []);
  return [users];
};
const Main = () => {
  const [users] = Users();
  return (
    <div className="main-wrapper">
      <main className="main users chart-page" id="skip-target">
        <div className="container">
          <h2 className="main-title">ADMINISTRACION GENERAL</h2>
          <div className="row stat-cards">
            <div className="col-md-6 col-xl-3">
              <article className="stat-cards-item">
                <div className="stat-cards-icon primary">
                  <i data-feather="bar-chart-2" aria-hidden="true"></i>
                </div>
                <div className="stat-cards-info">
                  <p className="stat-cards-info__num">1478 286</p>
                  <p className="stat-cards-info__title">Usuarios</p>
                  <p className="stat-cards-info__progress">
                    <span className="stat-cards-info__profit success">
                      <i data-feather="trending-up" aria-hidden="true"></i>4.07%
                    </span>
                    Last month
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-xl-3">
              <article className="stat-cards-item">
                <div className="stat-cards-icon warning">
                  <i data-feather="file" aria-hidden="true"></i>
                </div>
                <div className="stat-cards-info">
                  <p className="stat-cards-info__num">1478 286</p>
                  <p className="stat-cards-info__title">Publicaciones</p>
                  <p className="stat-cards-info__progress">
                    <span className="stat-cards-info__profit success">
                      <i data-feather="trending-up" aria-hidden="true"></i>0.24%
                    </span>
                    Ultimo mes
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-xl-3">
              <article className="stat-cards-item">
                <div className="stat-cards-icon purple">
                  <i data-feather="file" aria-hidden="true"></i>
                </div>
                <div className="stat-cards-info">
                  <p className="stat-cards-info__num">1478 286</p>
                  <p className="stat-cards-info__title">Visitas</p>
                  <p className="stat-cards-info__progress">
                    <span className="stat-cards-info__profit danger">
                      <i data-feather="trending-down" aria-hidden="true"></i>
                      1.64%
                    </span>
                    Ultimo Mes
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-xl-3">
              <article className="stat-cards-item">
                <div className="stat-cards-icon success">
                  <i data-feather="feather" aria-hidden="true"></i>
                </div>
                <div className="stat-cards-info">
                  <p className="stat-cards-info__num">1478 286</p>
                  <p className="stat-cards-info__title">Fotos</p>
                  <p className="stat-cards-info__progress">
                    <span className="stat-cards-info__profit warning">
                      <i data-feather="trending-up" aria-hidden="true"></i>0.00%
                    </span>
                    Ultimo Mes
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className="chart">
                <canvas
                  id="myChart"
                  aria-label="Site statistics"
                  role="img"
                ></canvas>
              </div>
              <div className="users-table table-wrapper">
                <table className="posts-table">
                  <thead>
                    <tr className="users-table-info">
                      <th>
                        <label className="users-table__checkbox ms-20">
                          <input type="checkbox" className="check-all" />
                          Fotos
                        </label>
                      </th>
                      <th>Titulo</th>
                      <th>Autor</th>
                      <th>Estado</th>
                      <th>Fecha</th>
                      <th>Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => {
                      return (
                        <>
                          <tr key={user.nick_name}>
                            <td>
                              <label className="users-table__checkbox">
                                <input type="checkbox" className="check" />
                                <div className="categories-table-img">
                                  <picture>
                                    <source
                                      srcset="./img/categories/01.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      src="./img/categories/01.jpg"
                                      alt="category"
                                    />
                                  </picture>
                                </div>
                              </label>
                            </td>
                            <td>{user.email}</td>
                            <td>
                              <div className="pages-table-img">
                                <picture>
                                  <source
                                    srcset="./img/avatar/avatar-face-04.webp"
                                    type="image/webp"
                                  />
                                  <img
                                    src="./img/avatar/avatar-face-04.png"
                                    alt="User Name"
                                  />
                                </picture>
                                {user.nick_name}
                              </div>
                            </td>
                            {user.role.id === 5 ? (
                              <td>
                                <span className="badge-active">
                                  {user.role.role_key}
                                </span>
                              </td>
                            ) : user.role.id === 2 ? (
                              <td>
                                <span className="badge-trashed">
                                  {user.role.role_key}
                                </span>
                              </td>
                            ) : user.role.id === 3 ? (
                              <td>
                                <span className="badge-pending">
                                  {user.role.role_key}
                                </span>
                              </td>
                            ) : (
                              <td>
                                <span className="badge-success">
                                  {user.role.role_key}
                                </span>
                              </td>
                            )}
                            <td>{user.created_at}</td>
                            <td>
                              <span className="p-relative">
                                <button
                                  className="dropdown-btn transparent-btn"
                                  type="button"
                                  title="More info"
                                >
                                  <div className="sr-only">More info</div>
                                  <i
                                    data-feather="more-horizontal"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                                <ul className="users-item-dropdown dropdown">
                                  <li>
                                    <a href="##">Editar</a>
                                  </li>
                                  <li>
                                    <a href="##">Suspender</a>
                                  </li>
                                  <li>
                                    <a href="##">Eliminar</a>
                                  </li>
                                </ul>
                              </span>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-3">
              <article className="customers-wrapper">
                <p className="customers__title">
                  Nuevos Usuarios <span>+958</span>
                </p>
                <p className="customers__date">28 dias.</p>
                <picture>
                  <source srcset="./img/svg/customers.svg" type="image/webp" />
                  <img src="./img/svg/customers.svg" alt="" />
                </picture>
              </article>
              <article className="white-block">
                <div className="top-cat-title">
                  <h3>Top Categorias</h3>
                  <p>7 Categorias, 1850 Noticias</p>
                </div>
                <ul className="top-cat-list">
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Policiales <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        Ciudad de Rosario
                        <span className="purple">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Economia <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        En el Pais <span className="blue">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Robos <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        Detonan bandan de mecheras
                        <span className="danger">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Asesinato <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        Zona Abasto <span className="success">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Entraderas <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        casas desprotegidas{" "}
                        <span className="warning">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Deporte <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        Reapertura
                        <span className="warning">+472</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="##">
                      <div className="top-cat-list__title">
                        Covid <span>8.2k</span>
                      </div>
                      <div className="top-cat-list__subtitle">
                        Omicron
                        <span className="warning">+472</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
