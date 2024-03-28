import { Helmet } from "react-helmet-async";
import { getStorage } from "../utils/localStorage";
import Donated from "../components/Donated/Donated";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import NoDonation from "../components/NoData/NoDonation";

const Donation = () => {
  const storedData = getStorage();
  const [seeAll, setSeeAll] = useState(false);
  const handleSeeAll = () => {
    setSeeAll(!seeAll);
  };
  return (
    <>
      <Helmet>
        <title>Donation</title>
      </Helmet>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {storedData.length ? (
          storedData
            .slice(0, seeAll ? storedData.length : 4)
            .map((donation) => (
              <Donated key={donation.id} donation={donation}></Donated>
            ))
        ) : (
          <NoDonation />
        )}
        <div
          className={`md:col-span-2 text-center ${
            storedData.length <= 4 && "hidden"
          }`}
        >
          <Button
            onClick={handleSeeAll}
            style={{
              color: "white",
              backgroundColor: "#009444",
              padding: "14px 20px",
              boxShadow: "none",
              borderRadius: "4px",
            }}
          >
            {seeAll ? "See Less" : "See All"}
          </Button>
        </div>
      </section>
    </>
  );
};

export default Donation;
