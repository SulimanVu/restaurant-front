import logo from "@/assets/LogoNew.svg";
import { loginThunk, logout, registerThunk } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector, useAuth } from "@/redux/hook";
import { Loader } from "@/shared/Loader/Loader";
import { Modal } from "@/shared/Modal/Modal";
import classNames from "classnames";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const navbar = [
  {
    href: "",
    name: "Рестораны",
  },
  {
    href: "",
    name: "Банкеты",
  },
  {
    href: "",
    name: "Новости",
  },
  {
    href: "",
    name: "О нас",
  },
];

const RegisterForm = ({
  onCloseModal,
  isAuth,
}: {
  onCloseModal: (bool: boolean) => void;
  isAuth: boolean;
}) => {
  const [form, setForm] = useState({
    name: "",
    mail: "",
    password: "",
    city: "",
    address: "",
    phone: "",
  });

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      name: e.target.value,
    }));
  };
  const handleMail = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      mail: e.target.value,
    }));
  };
  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      city: e.target.value,
    }));
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      password: e.target.value,
    }));
  };
  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      address: e.target.value,
    }));
  };
  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      phone: e.target.value,
    }));
  };
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.authSlice);
  useEffect(() => {
    if (isAuth) {
      onCloseModal(false);
    }
  }, [isAuth]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      registerThunk({
        mail: form.mail,
        password: form.password,
        address: form.address,
        city: form.city,
        name: form.name,
        phone: form.phone,
      })
    );
    setForm({
      mail: "",
      password: "",
      address: "",
      city: "",
      name: "",
      phone: "",
    });
  };
  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          placeholder="name"
          required
          value={form.name}
          onChange={handleName}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          placeholder="email@gmail.com"
          required
          value={form.mail}
          onChange={handleMail}
        />
      </div>

      <div className="flex items-center justify-between my-5">
        <div>
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            placeholder="address"
            required
            value={form.address}
            onChange={handleAddress}
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            placeholder="city"
            required
            value={form.city}
            onChange={handleCity}
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="+79991234567"
          className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          required
          value={form.phone}
          onChange={handlePhone}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          required
          value={form.password}
          onChange={handlePassword}
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded focus:ring-3"
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-sm font-medium text-gray-700"
        >
          Я согласен{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            с условиями сайта
          </a>
        </label>
      </div>
      <div className="flex items-center justify-start gap-4">
        <button
          type="submit"
          className={classNames(
            " text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-700",
            {
              "opacity-70": isLoading,
            }
          )}
        >
          Зарегистрироваться
        </button>
        {isLoading && <Loader />}
      </div>
    </form>
  );
};

const LoginForm = ({
  onCloseModal,
  isAuth,
}: {
  onCloseModal: (bool: boolean) => void;
  isAuth: boolean;
}) => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.authSlice);
  const [form, setForm] = useState({
    mail: "",
    password: "",
  });

  const handleMail = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      mail: e.target.value,
    }));
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      password: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginThunk({ mail: form.mail, password: form.password }));
    setForm({
      mail: "",
      password: "",
    });
  };

  useEffect(() => {
    if (isAuth) {
      onCloseModal(false);
    }
  }, [isAuth]);

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          placeholder="email@gmail.com"
          required
          value={form.mail}
          onChange={handleMail}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
          required
          value={form.password}
          onChange={handlePassword}
        />
      </div>

      <div className="flex items-start mb-5 ">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded focus:ring-3"
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-sm font-medium text-gray-700"
        >
          Я согласен{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            с условиями сайта
          </a>
        </label>
      </div>
      <div className="flex items-center justify-start gap-4">
        <button
          disabled={isLoading}
          type="submit"
          className={classNames(
            " text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-700",
            {
              "opacity-70": isLoading,
            }
          )}
        >
          Войти
        </button>
        {isLoading && <Loader />}
        {error && (
          <span className="text-red-600 text-sm">
            Неверный логин или пароль!
          </span>
        )}
      </div>
    </form>
  );
};

const Header = () => {
  const isAuth = useAuth();
  const dispatch = useAppDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleLogin = () => {
    if (isAuth) {
      dispatch(logout());
    } else {
      setIsOpenModal(true);
    }
  };
  return (
    <header className="relative">
      <img src={logo} className="absolute left-8 top-6 w-20 h-10" alt="logo" />
      <nav className="h-20 justify-self-center">
        <ul className="h-full w-full flex justify-center items-center gap-10">
          {navbar.map((item) => (
            <li
              className="text-xl cursor-pointer text-stone-900 hover:text-red-900"
              key={item.name}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="absolute right-10 text-xl top-6 text-stone-900 hover:text-red-900"
        onClick={handleLogin}
      >
        {isAuth ? "Выйти" : "Войти"}
      </button>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div className="w-96">
          <div className="flex items-center justify-center" role="group">
            <button
              type="button"
              className={classNames(
                "shadow-sm px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-200 hover:text-red-700",
                {
                  "text-red-700": !isRegister,
                }
              )}
              onClick={() => {
                setIsRegister(false);
              }}
            >
              Логин
            </button>
            <button
              type="button"
              className={classNames(
                "shadow-sm px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-200 hover:text-red-700",
                {
                  "text-red-700": isRegister,
                }
              )}
              onClick={() => {
                setIsRegister(true);
              }}
            >
              Регистрация
            </button>
          </div>
          <div>
            {isRegister ? (
              <RegisterForm onCloseModal={setIsOpenModal} isAuth={isAuth} />
            ) : (
              <LoginForm onCloseModal={setIsOpenModal} isAuth={isAuth} />
            )}
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Header;

