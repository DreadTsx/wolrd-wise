import { useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
import PageNav from "../../components/PageNav/PageNav";
import Button from "../../components/Button/Button";
import { useAuth } from "../../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("dread@example.com");
  const [password, setPassword] = useState("qwerty");
  //? Use effect that runs when isAuthenticated is true then navigate theuser to "/app"
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  //? handler function that handles the login...compares the email and password with the one in the FakeAuthContext.jsx
  const handleLogin = (e) => {
    e.preventDefault();
    //
    if (email && password) {
      login(email, password);
    }
  };
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}

export default Login;
