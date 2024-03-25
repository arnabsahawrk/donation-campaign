import { Typography } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

const Banner = () => {
  const [search, setSearch] = useState("");
  const onChange = ({ target }) => setSearch(target.value);

  return (
    <section className="bg-[#FFFFFFF2] rounded-xl relative h-[300px] lg:h-[500px] flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-10">
      <div className="absolute inset-0 bg-[url('https://i.postimg.cc/Z5RmMqVg/6271.jpg')] bg-cover bg-center bg-no-repeat opacity-5 rounded-xl"></div>
      <Typography
        variant="h1"
        className="text-[#0B0B0B] md:text-3xl text-xl lg:text-5xl"
      >
        We Grow By Helping People
      </Typography>
      <div className="relative flex w-5/6 md:w-full max-w-[24rem]">
        <Input
          type="text"
          label="Search Here"
          value={search}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={search ? "gray" : "blue-gray"}
          disabled={!search}
          className="!absolute right-1 top-1 rounded bg-[#FF444A]"
        >
          Search
        </Button>
      </div>
    </section>
  );
};

export default Banner;
