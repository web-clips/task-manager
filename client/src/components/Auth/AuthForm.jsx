import { useState } from "react";
import "./AuthForm.scss";

const AuthForm = () => {
  const [tab, setTab] = useState("login");
  return (
    <div className="auth__container">
      <h1 className="title">
        {tab === "login" ? "Войдите в аккаунт" : "Зарегистрироваться"}
      </h1>
      <div className="tabs">
        <button className="login">Login</button>
        <button>Register</button>
      </div>
      {tab === "register" ? (
        <div className="input">
          <label htmlFor="username">username</label>
          <input type="text" placeholder="username" name="username" />
        </div>
      ) : null}
      <div className="input">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" name="email" value={email} />
      </div>
      <div className="input">
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name="password" />
      </div>
      <button className="submit__btn" onClick={handleSubmit}>
        {tab === "login" ? "Вход" : "Регистрация"}
      </button>
      {message && (
        <p className={`message ${type === "success" ? "success" : "error"}`}>
          {message}
        </p>
      )}
      <div className="auth__type__change">
        {tab === "login" ? (
          <>
            <p>У вас еще нет аккаунта?</p>
            <button>Войти</button>
          </>
        ) : (
          <>
            <p>У вас уже есть аккаунт?</p>
            <button></button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
