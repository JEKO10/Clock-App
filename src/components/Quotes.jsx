import React, { useEffect, useState } from "react";

function Quotes() {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuote = async () => {
    setIsLoading(true);
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section className="quotes">
      <div>
        <p>{quote.content}</p>
        <button onClick={fetchQuote}>
          <svg
            width="18"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            className={isLoading ? "loading" : ""}
          >
            <path
              d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z"
              fill="#FFF"
              fillRule="nonzero"
              opacity=".5"
            />
          </svg>
        </button>
      </div>
      <h3>{quote.author}</h3>
    </section>
  );
}

export default Quotes;
