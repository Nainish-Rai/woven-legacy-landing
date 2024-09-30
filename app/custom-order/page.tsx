import ContactForm from "@/components/contact-us-form";
import OrderForm from "@/components/order-form";
import React from "react";

type Props = {};

export default function CustomPage({}: Props) {
  return (
    <div className="w-full lg:px-16 flex flex-col items-center justify-center mx-auto max-w-5xl">
      <h1 className="text-5xl lg:text-6xl text-center font-semibold mt-8  alternate-font">
        Customized Order
      </h1>
      <p className="text-base my-4 mb-8 text-center px-4 lg:px-0 lg:w-1/2">
        Fill the form below and we will get back to you as soon as we can.
      </p>
      <OrderForm />
    </div>
  );
}
