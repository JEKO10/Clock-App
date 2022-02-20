import { useState, useEffect } from "react";
import Main from "./components/Main";

function App() {
  const [location, setLocation] = useState("");

  const fetchLocation = async () => {
    const response = await fetch(
      "https://api.freegeoip.app/json/?apikey=53323ee0-9275-11ec-b15e-6d27cf6ad4a4"
    );
    const data = await response.json();
    setLocation(data);
    console.log(data);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
