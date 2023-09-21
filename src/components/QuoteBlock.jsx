import React from "react";

const QuoteBlock = ({ quote }) => {
  return (
    <div className="bg-slate-800 mx-auto text-gray-300 text-xl p-8 rounded-xl responsive">
      <p>{quote.content}</p>
      <p className="mt-4 text-right italic text-sm">~ {quote.author}</p>
    </div>
  );
};

export default QuoteBlock;
