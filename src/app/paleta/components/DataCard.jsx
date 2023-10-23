"use client";
import React, { useRef, useState } from "react";

export default function DataCard({ color }) {
  const ref = useRef(null);

  const [textoCopiado, setCopyText] = useState(false);
  const timeout = useRef(null);
  const copiarTexto = () => {
    ref.current.value = color.color;
    const textoACopiar = ref.current;

    textoACopiar.select();
    document.execCommand("copy");

    window.getSelection().removeAllRanges();
    setCopyText(true);
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setCopyText(false);
    }, 2000);
  };

  return (
    <div onClick={copiarTexto} className="p-2 w-1/3 flex self-stretch">
      <div
        className=" hover:scale-105 transition-all rounded-lg flex flex-col gap-3  items-center  p-2 w-full justify-between"
        style={{ background: color.color }}
      >
        <div className="self-start">{color.year}</div>
        <div className="text-center">
          <div className=" text-slate-950  text-[18px] sm:text-[20px]">
            {textoCopiado ? "COPIADO!" : color.name}
          </div>
          <div className="font-bold">{!textoCopiado && color.color}</div>
        </div>

        <div className="self-end">{color.pantone_value}</div>
      </div>
      <input
        ref={ref}
        className="absolute bg-transparent w-1 h-1 opacity-0"
        id="texto-a-copiar"
        type="text"
        value=""
      />
    </div>
  );
}
