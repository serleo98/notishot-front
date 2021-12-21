import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

export const Redactar = () => {
  const cookies = new Cookies();
  const history = useHistory();
  const enviarPortal = () => {
    history.push("/");
  };
  return (
    <>
      <div className="layer"></div>
      <main className="page-center">
        <article className="sign-up">
          <h1 className="sign-up__title" color="black">
            Nuevo NOTISHOT
          </h1>
          <div className="sign-up-form form">
            <label className="form-label-wrapper">
              <p className="form-label">Titulo del Notishot</p>
              <input
                className="form-input"
                type="name"
                name="username"
                placeholder="Ingrese su mail"
                required
              />
            </label>
            <label className="form-label-wrapper">
              <p className="form-label">Foto</p>
              <input
                className="form-input"
                type="file"
                name="file"
                placeholder="Ingresar contraseña"
                required
              />
            </label>
            <label className="form-label-wrapper">
              <p className="form-label">Descripcion</p>
              <textarea
                className="form-input"
                type="textarea"
                name="textarea"
                placeholder="Noticia"
                required
              />
            </label>
            <button className="form-btn primary-default-btn transparent-btn">
              Disparar
            </button>
            <button
              className="form-btn primary-default-btn transparent-btn mt-3"
              onClick={enviarPortal}
            >
              Volver al Portal
            </button>
          </div>
        </article>
      </main>
    </>
  );
};
