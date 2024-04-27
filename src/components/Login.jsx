import { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsgemail, setErrorMgsemail] = useState("");
  const [errorMsgpassword, setErrorPassword] = useState("");
  const [localEmail, setLocalEmail] = useState("");
  const [localPassword, setLocalPassword] = useState("");

  const navigate = useNavigate();
  const { loginHandler: contextLoginHandler } = useContext(AuthContext);

  const emailReExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordReExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleLogin = () => {
    if (!emailReExp.test(email)) {
      setErrorMgsemail("Email required*");
      setTimeout(() => {
        setErrorMgsemail("");
      }, 2000);
      return;
    }
    if (!passwordReExp.test(password)) {
      setErrorPassword("password required*");
      setTimeout(() => {
        setErrorPassword("");
      }, 2000);
      return;
    }
    if (!(email === localEmail && password === localPassword)) {
      alert("Please enter valid credentials");
      return;
    }
    contextLoginHandler();
    setTimeout(() => {
      alert("Login Success");
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    setLocalEmail(localStorage.getItem("email"));
    setLocalPassword(localStorage.getItem("password"));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <input
          placeholder="Please enter email here"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <div style={{ height: "20px" }}>
          {errorMsgemail && (
            <span style={{ color: "red", fontWeight: "bold" }}>
              {errorMsgemail}
            </span>
          )}
        </div>
        <input
          placeholder="Please enter password"
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          type="password"
        />
        <div style={{ height: "20px" }}>
          {errorMsgpassword && (
            <span style={{ color: "red", fontWeight: "bold" }}>
              {errorMsgpassword}
            </span>
          )}
        </div>
        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
