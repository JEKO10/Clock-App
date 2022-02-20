import { useState, useEffect } from "react";
import Main from "./components/Main";

function App() {
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState([]);

  const fetchLocation = async () => {
    const response = await fetch(
      "https://api.freegeoip.app/json/?apikey=53323ee0-9275-11ec-b15e-6d27cf6ad4a4"
    );
    const data = await response.json();
    setLocation(data.time_zone);
  };

  const fetchTimezone = async () => {
    const response = await fetch(
      `http://worldtimeapi.org/api/timezone/${location}`
    );
    const data = await response.json();
    setTimezone(data);
    console.log(data);
  };

  useEffect(() => {
    fetchLocation();
    fetchTimezone();
  }, [location]);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
