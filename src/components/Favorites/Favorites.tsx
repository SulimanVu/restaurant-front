import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IFavorite, fetchFavorites } from "@/redux/features/favoriteSlice";
import styles from "./favorites.module.scss";

const Favorites: FC = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(
    (state) => state.favoriteSlice.favorite
  ) as IFavorite[];
  const user = useAppSelector((state) => state.userSlice.user);

  useEffect(() => {
    user && dispatch(fetchFavorites({ id: user.favorite }));
  }, [user, dispatch]);  

  return (
    <div className={styles.favoriteBlock}>
      {/* {favorites.map((item) => {
        return <ProductCard key={item.product._id} {...item.product} />;
      })} */}
    </div>
  );
};

export default Favorites;
