import { Elements } from "@stripe/react-stripe-js";
import { BASE_URL, STRIPE_PUBLISH_KEY } from "@/utils";
import { useEffect, useState } from "react";
import axios from "axios";

import { loadStripe } from "@stripe/stripe-js";
import PaymentCardForm from "@/components/PaymentCardForm/PaymentCardForm";
import { Modal } from "@/shared/Modal/Modal";

const stripe = loadStripe(STRIPE_PUBLISH_KEY);

const PaymentModal = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    axios.post(BASE_URL + "/stripe").then(async (res: any) => {
      setClientSecret(res?.data?.clientSecret);
    });
  }, []);

  return (
    <div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {stripe && clientSecret && (
          <Elements stripe={stripe} options={{ clientSecret }}>
            <PaymentCardForm />
          </Elements>
        )}
      </Modal>
      <button
        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-700"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Pay
      </button>
    </div>
  );
};

export default PaymentModal;
