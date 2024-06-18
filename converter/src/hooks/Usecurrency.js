import React from "react";
import { useState , useEffect} from "react";
function Usecurrency(currency,date) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data[currency]);
      });
  }, [currency]);
  return data;
}
export default Usecurrency;