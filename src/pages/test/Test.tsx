import styles from "./test.module.scss";
import CityModal from "@/components/CityModal/CityModal";
import { PaymentElement } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BASE_URL, STRIPE_PUBLISH_KEY } from "@/utils";
import { useEffect, useState } from "react";
import axios from "axios";

import { loadStripe } from "@stripe/stripe-js";
import PaymentCardForm from "@/components/PaymentCardForm/PaymentCardForm";

const stripe = loadStripe(STRIPE_PUBLISH_KEY);

const Test = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios.post(BASE_URL + "/stripe").then(async (res: any) => {
      setClientSecret(res?.data?.clientSecret);
    });
  }, []);

  console.log(clientSecret, "clientSecret");

  return (
    <div className={styles.test}>
      {stripe && clientSecret && (
        <Elements stripe={stripe} options={{ clientSecret }}>
          <PaymentCardForm />
        </Elements>
      )}
    </div>
  );
};

export default Test;
