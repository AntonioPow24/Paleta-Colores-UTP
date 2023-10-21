"use client";

import { getApi } from "@/service/service";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DataCard from "./DataCard";

export default function Grid() {
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, settotalPages] = useState(1);
  const [numberPage, setNumberPage] = useState(1);
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [colorList, setColorList] = useState([]);

  const router = useRouter();
  const isBackDisabled = numberPage <= 1;
  const isNextDisabled = numberPage >= totalPages;

  useEffect(() => {
    setIsLoading(true);
    getApi(page || 1).then((data) => {
      console.log(data);
      settotalPages(data.total_pages);
      setColorList(data.data);
      setNumberPage(data.page);
      setIsLoading(false);
    });
  }, [page]);

  const next = () => {
    router.push(`/paleta?page=${numberPage + 1}`);
  };

  const back = () => {
    router.push(`/paleta?page=${numberPage - 1}`);
  };
  return (
    <div className="w-full flex flex-col h-screen justify-between">
      <h1 className=" text-center my-[2.5rem]  text-[2.7rem] font-bold">PALETA DE COLORES</h1>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <div className="grow p-3">
          <div className="flex flex-wrap ">
            {colorList.map((color) => (
              <DataCard key={color.id} color={color} />
            ))}
          </div>
        </div>
      )}

      <div className=" mb-6 flex justify-center gap-[4rem] md:mb-[15rem]">
        <button className="rounded-md text-slate-300 text-[1.2rem] bg-teal-950 px-[1.8rem]  " disabled={isBackDisabled || isLoading} onClick={back}>
          Back
        </button>
        <button className="rounded-md text-slate-300 text-[1.2rem] bg-teal-950
        px-[1.8rem]" disabled={isNextDisabled || isLoading} onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
