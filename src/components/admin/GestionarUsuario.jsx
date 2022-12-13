import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

const GestionarUsuario = () => {
  const cookies = new Cookies();
  const history = useHistory();
  const API = "https://notishot2-production.up.railway.app/api/v1/admin/usuarios";

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
const Mostrar = () => {
  const [users] = GestionarUsuario()
  return (
    <div>
      aca
      {users.id}
    </div>
    )
  }   

export default Mostrar