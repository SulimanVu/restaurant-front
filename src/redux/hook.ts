import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useEffect, useState } from "react";
import { JWT_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_KEY } from "@/utils";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    setIsAuthenticated(!!token && !!user);
  }, []);

  return isAuthenticated;
};
