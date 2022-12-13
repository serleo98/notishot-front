import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

const Users = () => {
  const cookies = new Cookies();
  const history = useHistory();
  //if (cookies.get("token") !== "1") {
  //  const mandarPortal = () => {
  //    history.push("/");
  //  };
  //}
  const API =
    "https://notishot2-production.up.railway.app/api/v1/admin/usuarios";
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
            role: item.role_id,
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
const TraerUsers = () => {
  const history = useHistory();
  const [users] = Users();
  const [items, setItems] = React.useState();
  const enviarRegistrar = (e) => {
    history.push("/gestion/" + e.target.id);
  };
  return (
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
            <th>Correo Electronico</th>
            <th>Autor</th>
            <th>ROL</th>
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
                          <img src="./img/categories/01.jpg" alt="category" />
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
                      <span className="badge-active">{user.role.role_key}</span>
                    </td>
                  ) : user.role.id === 2 ? (
                    <td>
                      <span className="badge-trashed">
                        {user.role.role_key}
                      </span>
                    </td>
                  ) : user.role_id === 3 ? (
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
                    <button
                      className="form-btn primary-default-btn transparent-btn mt-0 pd-0"
                      onClick={enviarRegistrar}
                      id={user.id}
                    >
                      {" "}
                      Gestionar
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TraerUsers;
