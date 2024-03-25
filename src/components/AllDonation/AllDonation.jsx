import PropTypes from "prop-types";
import SingleData from "./SingleData";

const AllDonation = ({ data }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-14 lg:mt-20">
      {data.map((item) => (
        <SingleData key={item.id} data={item} />
      ))}
    </section>
  );
};

AllDonation.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AllDonation;
