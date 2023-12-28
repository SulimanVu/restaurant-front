import { FormEvent, useState } from "react";
import styles from "./test.module.scss";
import { loginThunk, logout, registerThunk } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector, useAuth } from "@/redux/hook";

const Test = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const isAuth = useAuth();

  const user = useAppSelector((state) => state.authSlice.user);
  const jwt = useAppSelector((state) => state.authSlice.jwt);

  const handleSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      loginThunk({
        identifier: email,
        password: password,
      })
    );
  };

  const handleSubmitRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      registerThunk({
        username,
        password,
        email,
      })
    );
  };

  return (
    <div className={styles.test}>
      {/* <form onSubmit={handleSubmitLogin}>
        <input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isAuth ? "Logout" : "Login"}</button>
      </form>
      <p>{user.email}</p>
      <p>{user.username}</p>
      <p>{jwt}</p>
      <button onClick={() => dispatch(logout())}>logout</button> */}

      <form onSubmit={handleSubmitRegister}>
        <input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isAuth ? "Logout" : "Register"}</button>
      </form>
      <p>{user.email}</p>
      <p>{user.username}</p>
      <p>{jwt}</p>
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
};

export default Test;
