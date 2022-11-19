import { useState, useEffect } from "react";
import Main from "./components/Main";
import MoreInfo from "./components/MoreInfo";
import Quotes from "./components/Quotes";

function App() {
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState([]);
  const [time, setTime] = useState("");

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        "https://api.ipbase.com/v1/json/?apikey=53323ee0-9275-11ec-b15e-6d27cf6ad4a4"
      );
      const data = await response.json();
      setLocation(data.time_zone);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTimezone = async () => {
    try {
      const response = await fetch(
        `https://worldtimeapi.org/api/timezone/${location}`
      );
      const data = await response.json();
      setTimezone(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLocation();
    fetchTimezone();
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("en-GB").replace(/(.*)\D\d+/, "$1"));
    }, 1000);
  }, [location]);

  return (
    <>
      <header
        className={
          time.substring(0, 2) > 6 && time.substring(0, 2) < 18
            ? "day"
            : "night"
        }
      >
        <Quotes />
        <Main location={location} time={time} />
      </header>
      <MoreInfo timezone={timezone} />
    </>
  );
}

export default App;
