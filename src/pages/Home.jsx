import { Helmet } from "react-helmet-async";
import AllDonation from "../components/AllDonation/AllDonation";
import Banner from "../components/Banner.jsx/Banner";
import useDonationData from "../hooks/useDonationData";
import { useEffect, useState } from "react";

const Home = () => {
  const [donation] = useDonationData();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(donation);
  }, [donation]);

  return (
    <section>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner data={donation} setData={setData} />
      <AllDonation data={data} />
    </section>
  );
};

export default Home;
