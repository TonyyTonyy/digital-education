"use client"
import React from "react";

const Card = ({ imgSrc, title, subtitle, direction }) => {
    const processTitle = (title) => {
        return title.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== title.split('\n').length - 1 && <br />}
          </React.Fragment>
    ));
  };
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-700/30 px-6 py-2" style={{ height: "240px" }}>
      {direction === "right" ? (
        <>
          <div className="flex flex-col gap-3 justify-center text-start">
            <h1 className="text-md sm:text-lg lg:text-2xl font-extrabold">{processTitle(title)}</h1>
            <p className="text-xs md:text-sm font-bold text-white">{subtitle}</p>
          </div>
          <img src={imgSrc} alt="Segurança" className="w-[40%] rounded-lg ml-2 object-cover" style={{ height: "100%" }} />
        </>
      ) : (
        <>
          <img src={imgSrc} alt="Segurança" className="w-2/4 rounded-lg mr-8 object-cover" style={{ height: "100%" }} />
          <div className="flex flex-col gap-3 justify-center text-start">
            <h1 className="text-md sm:text-lg lg:text-2xl font-extrabold">{processTitle(title)}</h1>
            <p className="text-xs md:text-sm font-bold text-white">{subtitle}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
