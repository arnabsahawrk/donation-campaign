import PropTypes from "prop-types";
import SingleData from "./SingleData";
import NoData from "../NoData/NoData";

const AllDonation = ({ data }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 md:my-14 lg:my-20">
      {data.length ? (
        data.map((item) => <SingleData key={item.id} data={item} />)
      ) : (
        <NoData />
      )}
    </section>
  );
};

AllDonation.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AllDonation;
