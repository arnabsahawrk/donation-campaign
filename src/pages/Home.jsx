import AllDonation from "../components/AllDonation/AllDonation";
import Banner from "../components/Banner.jsx/Banner";
import useDonationData from "../hooks/useDonationData";

const Home = () => {
  const [data] = useDonationData();

  return (
    <section>
      <Banner />
      <AllDonation data={data} />
    </section>
  );
};

export default Home;
