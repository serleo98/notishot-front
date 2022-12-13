import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

function TraerNotas() {
  const cookies = new Cookies();
  const history = useHistory();
  const API = "https://notishot2-production.up.railway.app/api/v1/public/notas-portada";
  const [notas, setNotas] = useState([]);
  async function notasTraidas() {
    const notas = await axios
      .get(API, {
        headers: {
          Authorization: "Bearer " + cookies.get("token"),
        },
      })
      .then((response) => {
        const noticiasMapeadasParaLista = response.data.data.map((item) => {
          return {
            id: item.id,
            title: item.title,
            body: item.body,
            location: item.location,
            user: item.user,
          };
        });
        return noticiasMapeadasParaLista;
      })
      .catch((error) => {
        console.log(error);
      });
    setNotas(notas);
    console.log(notas)
  }
  useEffect(() => {
    notasTraidas();
  }, []);
  return [notas];
}

const TraerNoticias = () => {
  const [notas] = TraerNotas();
  return (
    <>
    <div className="container">
        <div className="text-center">
          <div className="row justify-content-center">
            <div className="card col-xs-12 col-sm-9 col-md-4 col-lx-4 ">
              {notas.map((nota) => {
                return (
                  <div key={nota.id}>
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body mt-1">
                      <h5 className="card-title mt-4">{nota.id}</h5>
                      <p className="card-text mt-4">{nota.body}</p>
                      <a href="#!" className="btn btn-primary mt-4">
                        Autor: {nota.user.nick_name}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="card col-xs-12 col-sm-9 col-md-4 col-lx-4 ">
              {notas.map((nota) => {
                return (
                  <div key={nota.id}>
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body mt-1">
                      <h5 className="card-title mt-4">{nota.id}</h5>
                      <p className="card-text mt-4">{nota.body}</p>
                      <a href="#!" className="btn btn-primary mt-4">
                        Autor: {nota.user.nick_name}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="card col-xs-12 col-sm-9 col-md-4 col-lx-4 ">
              {notas.map((nota) => {
                return (
                  <div key={nota.id}>
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body mt-1">
                      <h5 className="card-title mt-4">{nota.id}</h5>
                      <p className="card-text mt-4">{nota.body}</p>
                      <a href="#!" className="btn btn-primary mt-4">
                        Autor: {nota.user.nick_name}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraerNoticias;
