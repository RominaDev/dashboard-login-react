import React from 'react'
import './Login.css';
import { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container-all">
      <div className="container-login">
        <div className="div-login-uno">
          <form className="login-form-uno">

            <span className="login-form-title">
            </span>

            <div className="wrap-input-login">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input-login">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
           
            <div className="text-center-uno">
              <span className="txt1">¿Olvidaste Contraseña? </span>
              <a className="link" href="#">
                Obten ayuda aquí
              </a>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
           
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Login;