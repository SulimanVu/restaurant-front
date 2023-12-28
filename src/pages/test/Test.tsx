import { FormEvent, useState } from "react";
import styles from "./test.module.scss";
import { loginThunk, logout, registerThunk } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector, useAuth } from "@/redux/hook";
import CityModal from "@/components/CityModal/CityModal";

const Test = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const isAuth = useAuth();

  const userID = useAppSelector((state) => state.authSlice.userID);
  const jwt = useAppSelector((state) => state.authSlice.token);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      loginThunk({
        mail: email,
        password: password,
      })
    );
  };

  const handleSubmitRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      registerThunk({
        name: username,
        password,
        mail: email,
        address: "",
        city: "",
        phone: "",
      })
    );
  };

  return (
    <div className={styles.test}>
      <form onSubmit={handleSubmitLogin}>
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
      <p>{userID}</p>
      <p>{jwt}</p>
      <button onClick={() => dispatch(logout())}>logout</button>

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
      <p>{userID}</p>
      <p>{jwt}</p>
      <button onClick={() => dispatch(logout())}>logout</button>
      <CityModal />
    </div>
  );
};

export default Test;
