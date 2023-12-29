import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import styles from "./basketCard.module.scss";
import { Product } from "@/redux/features/productSlice";
import { deleteInBasket } from "@/redux/features/basketSlice";
import DecrementSVG from "@/assets/DecrementSVG";
import DeleteSVG from "@/assets/DeleteSVG";
import IncrementSVG from "@/assets/IncrementSVG";

interface BasketCardProps {
  product: Product;
  size: number;
}

const BasketCard: FC<BasketCardProps> = ({ product, size }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice.user);

  const [value, setValue] = useState<number>(1);

  const handleAmoutInc = () => {
    setValue(() => value + 1);
  };
  const handleAmoutDec = () => {
    value > 1 ? setValue(() => value - 1) : null;
  };
  const handleDeleteProduct = () => {
    dispatch(
      deleteInBasket({ _id: user.basket, product: product._id, size: size })
    );
  };
  return (
    <div className={styles.basketCard}>
      <div className={styles.productDetails}>
        <img src={`http://localhost:3010/${product.photo[0]}`} alt="image" />
        <div className={styles.description}>
          <h5>{product.name}</h5>
          <span>Размер: {size}</span>
        </div>
      </div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.amount}>
        <div onClick={handleAmoutDec}>
          <DecrementSVG />
        </div>
        <div className={styles.value}>{value}</div>
        <div onClick={handleAmoutInc}>
          <IncrementSVG />
        </div>
      </div>
      <div className={styles.total}>{product.price * value}</div>
      <button className={styles.buy}>Купить</button>
      <div onClick={handleDeleteProduct} className={styles.delete}>
        <DeleteSVG />
      </div>
    </div>
  );
};

export default BasketCard;
