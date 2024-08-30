import Counter from "@/components/counter";
import { title } from "process";
import React from "react";

type Props = {};

function NumbersSection({}: Props) {
  const analytic = [
    {
      title: "Clients Served",
      value: 100,
      text: "+",
    },
    {
      title: "Cutomer Retention",
      value: 89,
      text: "%",
    },
    {
      title: "Projects Executed",
      value: 6500,
      text: "+",
    },
    {
      title: "Carpets Delivered",
      value: 30000,
      text: "+",
    },
  ];
  return (
    <div className="w-full max-w-7xl px-2 lg:px-0 text-center mt-8">
      <h1 className=" sm:font-medium sm:mb-2">
        <span className="alternate-font">A</span> Proven Track{" "}
        <span className="alternate-font">Record</span>
      </h1>
      <p className="sm:mt-0">Exporting rugs and art around the world</p>
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-8 ">
        {analytic.map((item) => (
          <div
            className="w-1/3 pr-6 flex flex-col items-center"
            key={item.title}
          >
            <div className="flex mt-4 items-center">
              <Counter
                className="text-4xl lg:text-5xl"
                targetValue={item.value}
              />
              <p className="text-4xl ml-2">{item.text}</p>
            </div>
            <p className="text-lg pt-2 text-opacity-50 font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NumbersSection;
