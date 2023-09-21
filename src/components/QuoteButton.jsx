import React from "react";

const QuoteButton = ({ setQuote, text }) => {
  const handleClick = (e) => {
    e.target.disabled = true;
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/quotes/random");
        const data = await response.json();
        setQuote({
          content: data[0].content,
          author: data[0].author,
          loading: false,
        });
      } catch (error) {
        console.log(error);
      } finally {
        e.target.disabled = false;
      }
    };
    fetchQuote();
  };

  return (
    <button
      role="button"
      onClick={handleClick}
      className="border p-3 text-lg text-gray-300 mx-auto rounded-xl hover:bg-slate-600 responsive"
    >
      {text}
    </button>
  );
};

export default QuoteButton;
