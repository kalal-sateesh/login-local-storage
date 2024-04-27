import { useState } from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsgname, setErrorMgsname] = useState("");
  const [errorMsgemail, setErrorMgsemail] = useState("");
  const [errorMsgnumber, setErrorMgsnumber] = useState("");
  const [errorMsgpassword, setErrorPassword] = useState("");

  const navigate = useNavigate();

  const emailReExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordReExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const mobile = /^[0-9]{10}$/;

  const handleSignup = () => {
    if (!name) {
      setErrorMgsname("Name required*");
      setTimeout(() => {
        setErrorMgsname("");
      }, 2000);
      return;
    }
    if (!emailReExp.test(email)) {
      setErrorMgsemail("Email required*");
      setTimeout(() => {
        setErrorMgsemail("");
      }, 2000);
      return;
    }
    if (!mobile.test(number)) {
      setErrorMgsnumber("Number required*");
      setTimeout(() => {
        setErrorMgsnumber("");
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
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("password", password);
    alert("Signup Success");
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.SignupContainer}>
        <input
          placeholder="Please enter name here"
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <div style={{ height: "20px" }}>
          {errorMsgname && (
            <span style={{ color: "red", fontWeight: "bold" }}>
              {errorMsgname}
            </span>
          )}
        </div>
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
          placeholder="Please enter number here"
          onChange={(e) => setNumber(e.target.value)}
          className={styles.input}
          type="number"
        />
        <div style={{ height: "20px" }}>
          {errorMsgnumber && (
            <span style={{ color: "red", fontWeight: "bold" }}>
              {errorMsgnumber}
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
        <br></br>
        <button className={styles.button} onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
