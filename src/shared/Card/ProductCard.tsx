import styles from './productCard.module.scss';
import star from '../../assets/star.svg';
import favorite from '../../assets/favorite.svg'
import { FC } from 'react';
import cn from 'classnames'

interface ProductCardProps {
    className?: string,
    text: string
}

const ProductCard: FC<ProductCardProps> = ({ className, text = 'Lorem ipsum dolor sitamet consectetur adipisicing elit. Perspiciatis deleniti quod voluptatum voluptatibus delectus sed commodi ullam facere et quos.' }) => {
    return (
        <div className={cn(styles.productCard, className)}>
            <div className={styles.img}>
                <div className={styles.favorite}><img src={favorite} alt="" /></div>
                <img src="https://www.pngall.com/wp-content/uploads/8/Dish-PNG-High-Quality-Image.png" alt="" />
            </div>
            <div className={styles.title}>Чахохбили с курицей и картофелем</div>
            <div className={styles.rating}>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
            <div className={styles.description}> {text.length > 65 ? text.slice(0, 65) + '...' : text} </div>
            <div className={styles.footerCard}>
                <div className={styles.price}>₽499</div>
                <div className={styles.btn}><button>Add to cart</button></div>
            </div>

        </div>
    )
}

export default ProductCard