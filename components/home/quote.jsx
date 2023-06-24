import React from "react";

function QUOTE() {
  return (
    <div className="p-10 relative -z-50 h-72 mt-20 flex justify-center items-center">
      <div className="font-medium text-4xl w-[600px] text-center quote italic leading-snug my-10">
        If you don't like your destiny, don't accept it. Instead have the
        courage to change it the way you want it to be.
      </div>
      <img
        src="/quote/naruto.png"
        className="absolute -bottom-10 -left-10 h-60"
      />
      <img
        src="/quote/quotation_bottom.png"
        className="absolute -bottom-10 right-0 h-20"
      />
      <img
        src="/quote/quotation_top.png"
        className="absolute -top-10 left-0 h-20"
      />
    </div>
  );
}

export default QUOTE;
