import styles from "./productCard.module.scss";
import star from "@/assets/star.svg";
import favorite from "@/assets/favorite.svg";
import { FC } from "react";
import cn from "classnames";
import { IFood } from "@/redux/features/foodSlice";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  className?: string;
  item: IFood;
}

const ProductCard: FC<ProductCardProps> = ({ className, item }) => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate(`/productDetail/${item._id}`);
  };

  return (
    <div className={cn(styles.productCard, className)}>
      <div className={styles.img}>
        <div className={styles.favorite}>
          <img src={favorite} alt="#" />
        </div>
        <img src={`http://localhost:3100/${item.image}`} alt="#" />
      </div>
      <div className={styles.title}>{item.name}</div>
      <div className={styles.rating}>
        <img src={star} alt="#" />
        <img src={star} alt="#" />
        <img src={star} alt="#" />
        <img src={star} alt="#" />
        <img src={star} alt="#" />
      </div>
      <div className={styles.description}>
        {item.info?.length > 65 ? item.info.slice(0, 65) + "..." : item.info}
      </div>
      <div className={styles.footerCard}>
        <div className={styles.price}>₽{item.price || "--"}</div>
        <div className={styles.btn}>
          <button onClick={handleRoute}>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
