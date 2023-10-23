"use client";

import useColors from "./hooks/useColors";
import GridCards from "./paleta/components/GridCards";

export default function Page() {
  const { isLoading, colorList, isBackDisabled, isNextDisabled, back, next } =
    useColors();
  return (
    <div className="w-full flex flex-col h-screen justify-between bg-[#eef0d2] ">
      <h1 className=" text-center my-[2.7rem]  text-[3rem] font-bold">
        PALETA DE COLORES
      </h1>
      <GridCards isLoading={isLoading} colorList={colorList} />

      <div className=" mb-6 flex justify-center gap-[4rem] md:mb-[15rem]">
        <button
          className="rounded-md text-slate-300 text-[1.2rem] bg-teal-950 px-[1.8rem]  "
          disabled={isBackDisabled || isLoading}
          onClick={back}
        >
          Back
        </button>
        <button
          className="rounded-md text-slate-300 text-[1.2rem] bg-teal-950
        px-[1.8rem]"
          disabled={isNextDisabled || isLoading}
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
}
