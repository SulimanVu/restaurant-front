import React, { useEffect } from "react";
import styles from "./productDetail.module.scss";
import Header from "../Header/Header";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchOneProduct, fetchProducts } from "@/redux/features/productSlice";
import { useParams } from "react-router-dom";
import size_arrow from "@/assets/size_arrow.png"
import Slider from "../Slider/Slider";



const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch()
    const product = useAppSelector(
        (state) => state.productSlice.oneProduct
    )

    
    useEffect(() => {
        id && dispatch(fetchOneProduct(id))
    }, [dispatch, id])



   /// const user = useAppSelector((state) => state.userSlice.user.basket);

 


    return (
        <>
            <div className={styles.product_detail}>
                <Slider />
                <div className={styles.product_descr}>
                    <h1 className={styles.descr_title}>{product?.info}</h1>
                    <div className={styles.product_size_title}>
                        <div className={styles.select_size}>Select Size</div>
                        <div className={styles.size_guide}>Size Guide</div>
                        <div className="size_arrow"><img src={size_arrow} alt="" /></div>
                    </div>
                    {/* <div className={styles.product_size}>
                        {product?.sizes.map(item => item.quantity > 0 && <div className={styles.product_size_item}>{item.size}</div>)}
                    </div> */}
                    <div className={styles.colours_title}>Colours Available </div>
                    <div className={styles.add_cart}>
                        <div className={styles.cart_btn}> Add to cart</div>
                        <div className={styles.cart_count}>₽{product?.price}</div>
                    </div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
