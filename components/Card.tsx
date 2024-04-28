import Image from "next/image";
import React from "react";

const Card = () => {
    
  return (
    <section className="flex flex-row">
      <div className="flex flex-col gap-y-4 items-center shadow-2xl px-2 py-8 rounded-lg">
        <Image
          src="/images/short-url.png"
          alt="card"
          width={400}
          height={400}
        />
        <h1 className="text-3xl font-bold ">Short URL</h1>
        <p className="text-sm font-medium max-w-md text-center text-slate-300">
          You can shorten your URL at here build with Next JS, Tailwind CSS,
          React JS & Local Storage
        </p>
      </div>
    </section>
  );
};

export default Card;
