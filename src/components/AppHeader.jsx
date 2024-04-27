import { useNavigate } from "react-router-dom";
import styles from "./AppHeader.module.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
const AppHeader = () => {
  const navigate = useNavigate();

  const { isAuth, logoutHandler } = useContext(AuthContext);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogoutBtn = () => {
    logoutHandler();
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <nav
      style={{
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        flexDirection: "row-reverse",
        backgroundColor: "rgb(87, 187, 218)",
      }}
    >
      {!isAuth ? (
        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>
      ) : (
        <button className={styles.button} onClick={handleLogoutBtn}>
          Logout
        </button>
      )}
      <button className={styles.button} onClick={handleSignup}>
        sign up
      </button>
    </nav>
  );
};

export default AppHeader;
