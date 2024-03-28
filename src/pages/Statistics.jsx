import { Helmet } from "react-helmet-async";
import Chart from "../components/Chart/Chart";
import { getStorage } from "../utils/localStorage";
import NoDonation from "../components/NoData/NoDonation";

const Statistics = () => {
  const storedData = getStorage();
  return (
    <>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <section className="h-[70vh] mt-12">
        {storedData.length ? <Chart /> : <NoDonation />}
      </section>
    </>
  );
};

export default Statistics;
