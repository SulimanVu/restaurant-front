import styles from "./test.module.scss";
import CityModal from "@/components/CityModal/CityModal";
import { PaymentElement } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BASE_URL, STRIPE_PUBLISH_KEY } from "@/utils";
import { useEffect, useState } from "react";
import axios from "axios";

import { loadStripe } from "@stripe/stripe-js";
import PaymentCardForm from "@/components/PaymentCardForm/PaymentCardForm";
import PaymentModal from "@/components/PaymentModal/PaymentModal";

const stripe = loadStripe(STRIPE_PUBLISH_KEY);

const Test = () => {
  const [onOpen, setOnOpen] = useState(false);

  return (
    <div className={styles.test}>
      <PaymentModal />
    </div>
  );
};

export default Test;
