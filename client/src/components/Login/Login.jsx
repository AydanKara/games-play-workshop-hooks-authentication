/* eslint-disable react/prop-types */
import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

const Login = () => {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    email: "",
    password: "",
  });
  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo" />
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name={LoginFormKeys.Email}
            placeholder="Sokka@gmail.com"
            onChange={onChange}
            value={values[LoginFormKeys.Email]}
          />
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            name={LoginFormKeys.Password}
            onChange={onChange}
            value={values[LoginFormKeys.Password]}
          />
          <input type="submit" className="btn submit" defaultValue="Login" />
          <p className="field">
            <span>
              If you don`t have profile click <a href="#">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
