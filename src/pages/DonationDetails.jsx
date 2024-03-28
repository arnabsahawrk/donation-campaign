import { useEffect, useState } from "react";
import useDonationData from "../hooks/useDonationData";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { setStorage } from "../utils/localStorage";

const DonationDetails = () => {
  const [theData, setTheData] = useState({});
  const { id } = useParams();
  const [data] = useDonationData();

  useEffect(() => {
    const theData = data.find((item) => item.id === +id);
    setTheData(theData);
  }, [data, id]);

  const { picture, title, category_bg, description, price } = theData || {};

  const handleDonation = () => {
    setStorage(theData);
  };

  return (
    <>
      <Helmet>
        <title>Donation Details</title>
      </Helmet>
      <Card>
        <CardHeader className="m-0 rounded-none rounded-t-xl shadow-none relative">
          <img className="object-cover w-full h-96" src={picture} />
          <div className="absolute bottom-0 bg-[#0B0B0B80] w-full h-24 flex items-center justify-center md:justify-start">
            <Button
              onClick={handleDonation}
              style={{
                color: "wheat",
                backgroundColor: category_bg,
                padding: "16px 26px",
                boxShadow: "none",
                borderRadius: "4px",
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "35px",
              }}
            >
              Donate ${price}
            </Button>
          </div>
        </CardHeader>
        <CardBody className="space-y-3">
          <Typography className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0B0B0B]">
            {title}
          </Typography>
          <Typography className="text-sm md:text-base lg:text-lg">
            {description}
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};

export default DonationDetails;
