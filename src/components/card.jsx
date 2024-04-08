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
    <div className="flex flex-col md:flex-row items-center justify-between rounded-xl bg-slate-700/30 px-6 py-2 md:h-[260px]">
      {direction === "right" ? (
        <>
          <div className="flex flex-col gap-3 justify-center text-start">
            <h1 className="text-md sm:text-lg lg:text-2xl text-white font-extrabold">{processTitle(title)}</h1>
            <p className="text-xs md:text-sm font-bold text-white">{subtitle}</p>
          </div>
          <img src={imgSrc} alt="Segurança" className="md:w-[40%] w-[250px] rounded-lg md:ml-2 md:object-cover h-[180px] md:h-full object-contain "/>
        </>
      ) : (
        <>
          <img src={imgSrc} alt="Segurança" className="md:w-2/4 w-[200px] md:m-0 m-4 rounded-lg md:mr-8 object-fill h-[180px] md:h-full md:object-cover" />
          <div className="flex flex-col gap-3 justify-center text-start">
            <h1 className="text-md sm:text-lg lg:text-2xl font-extrabold text-white">{processTitle(title)}</h1>
            <p className="text-xs md:text-sm font-bold text-white">{subtitle}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
