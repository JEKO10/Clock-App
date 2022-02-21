import React, { useState } from "react";

function Quotes() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data);
    console.log(quote);
  };

  return (
    <section className="quotes">
      <button onClick={fetchQuote}>AAA</button>
    </section>
  );
}

export default Quotes;
