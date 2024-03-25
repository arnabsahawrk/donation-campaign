import axios from "axios";
import { useEffect, useState } from "react";

const useDonationData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("./donationData.json");
        const { data } = res;
        setData(data);
      } catch (err) {
        console.error("Failed to fetch data: ", err);
      }
    };
    fetchData();
  }, []);
  return [data];
};

export default useDonationData;
