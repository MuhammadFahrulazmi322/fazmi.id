import React from "react";
import Card from "./Card";

const Halloffame = () => {
  return (
    <section>
      <h1 className=" text-lg lg:text-3xl text-center pb-20">
        Projects
        <span className="text-white mx-4 p-2 rounded-md bg-blue-400 text-lg lg:text-3xl">
          {" "}
          Hall Of Fame
        </span>
      </h1>
      <div>
        <Card />
      </div>
    </section>
  );
};

export default Halloffame;
