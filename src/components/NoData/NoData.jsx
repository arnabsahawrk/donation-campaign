const NoData = () => {
  return (
    <section className="md:col-span-2 lg:col-span-4">
      <div
        className="flex flex-col justify-center items-center gap-4 text-center
  text-[#0B0B0B]"
      >
        <img
          className="object-cover size-52"
          src="https://i.postimg.cc/HLphkX7N/no-results.png"
          alt="Not Found"
        />
        <p className="text-2xl font-semibold md:text-3xl">
          No Data is available on this search
        </p>
      </div>
    </section>
  );
};

export default NoData;
