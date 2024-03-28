import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Donated = ({ donation }) => {
  const { picture, title, category, price, id, category_bg, card_bg, text_bg } =
    donation || {};
  return (
    <Card style={{ backgroundColor: card_bg }} className="flex-row">
      <CardHeader className="m-0 rounded-none rounded-l-xl shadow-none">
        <img className="object-cover max-w-48 h-full" src={picture} />
      </CardHeader>
      <CardBody className="space-y-1">
        <Button
          style={{
            color: category_bg,
            backgroundColor: card_bg,
            padding: "6px 12px",
            boxShadow: "none",
            borderRadius: "4px",
          }}
        >
          {category}
        </Button>
        <Typography className="text-black font-extrabold text-lg lg:text-2xl">
          {title}
        </Typography>
        <Typography
          style={{ color: text_bg, fontSize: "16px", fontWeight: "bold" }}
        >
          ${price}.00
        </Typography>
        <Link to={`/donation/details/${id}`}>
          <Button
            style={{
              color: "white",
              backgroundColor: category_bg,
              padding: "8px 16px",
              boxShadow: "none",
              borderRadius: "4px",
            }}
          >
            View Details
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

Donated.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default Donated;
