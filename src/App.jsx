import { useState, useEffect } from "react";
import QuoteButton from "./components/QuoteButton";
import QuoteBlock from "./components/QuoteBlock";

const App = () => {
  const [quote, setQuote] = useState({
    content: "",
    author: "",
    loading: true,
  });

  return (
    <main className="bg-slate-700 h-screen grid place-content-center space-y-8">
      <h1 className="text-gray-300 text-5xl text-center">Random Quotes</h1>
      {quote.loading ? (
        <QuoteButton setQuote={setQuote} text="Generate Quote" />
      ) : (
        <>
          <QuoteBlock quote={quote} />
          <QuoteButton setQuote={setQuote} text="Generate Another Quote"/>
        </>
      )}
    </main>
  );
};

export default App;
