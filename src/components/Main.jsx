import { useEffect, useState } from "react";

function Main() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString().replace(/(.*)\D\d+/, "$1"));
    }, 1000);
  });

  return (
    <section className="main">
      <h2>
        good{" "}
        {time.substring(0, 2) < 6
          ? "night"
          : time.substring(0, 2) >= 18
          ? "evening"
          : time.substring(0, 2) >= 12
          ? "afternoon"
          : time.substring(0, 2) < 12
          ? "morning"
          : ""}
        , It`s currently
      </h2>
      <h1>{time}</h1>
    </section>
  );
}

export default Main;
