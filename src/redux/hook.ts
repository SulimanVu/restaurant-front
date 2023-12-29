import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useEffect, useState } from "react";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { token, userID } = useAppSelector((state) => state.authSlice);

  useEffect(() => {
    setIsAuthenticated(!!token && !!userID);
  }, [token, userID]);

  return isAuthenticated;
};
