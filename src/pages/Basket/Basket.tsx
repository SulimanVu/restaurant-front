import styles from "./basket.module.scss";
import { useSpring, animated } from "react-spring";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Field, Form, Formik } from "formik";
import { User } from "@/redux/models";
import { useEffect } from "react";
import { getUser } from "@/redux/features/userSlice";

const Basket = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.authSlice.userID);
  const user = useAppSelector((state) =>
    state.userSlice.users.find((item) => item._id === id)
  );

  const Number = ({ n }: { n: number }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  };

  const initialValues: Partial<User | { comment: string }> = {
    name: "",
    phone: undefined,
    address: "",
    basket: [],
    comment: "",
  };

  console.log(user);
  console.log(id);
  
  const handleSubmit = (values: Partial<User>) => {};

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch]);
  return (
    <div className={styles.mainBasket}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" />
          <Field name="phone" />
          <Field name="address" />
          <Field name="comment" />
        </Form>
      </Formik>
    </div>
  );
};

export default Basket;
