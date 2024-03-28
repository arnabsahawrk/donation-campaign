const NoDonation = () => {
  return (
    <section className="md:col-span-2">
      <div
        className="flex flex-col justify-center items-center gap-4 text-center
      text-[#0B0B0B]"
      >
        <img
          className="object-cover size-52"
          src="https://i.postimg.cc/c4rZhgm2/denied.png"
          alt="No Donate"
        />
        <p className="text-2xl font-semibold md:text-3xl">
          Did not donate any penny yet.
        </p>
      </div>
    </section>
  );
};

export default NoDonation;
