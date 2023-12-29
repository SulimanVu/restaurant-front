import { Loader } from "@/shared/Loader/Loader";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import classNames from "classnames";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const PaymentCardForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/",
      },
    });

    if (error.message) {
      setError(error.message);
      toast.error("Оплата не прошла !");
    } else {
      toast.success("Оплата прошла успешно !");
    }

    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="w-96">
      <PaymentElement className="w-full" />
      <div className="flex items-center justify-end gap-4 mt-5">
        {error && <span className="text-red-600 text-sm">{error}</span>}
        {isLoading && <Loader />}
        <button
          type="submit"
          className={classNames(
            "text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-700",
            {
              "opacity-70": isLoading,
            }
          )}
        >
          Оплатить заказ
        </button>
      </div>
    </form>
  );
};

export default PaymentCardForm;
