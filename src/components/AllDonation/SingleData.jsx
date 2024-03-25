import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const SingleData = ({ data }) => {
  const { picture, title, category, category_bg, card_bg, text_bg } = data;

  return (
    <Card style={{ backgroundColor: card_bg }}>
      <CardHeader className="m-0 rounded-none rounded-t-xl shadow-none">
        <img className="object-cover w-full h-[194px]" src={picture} />
      </CardHeader>
      <CardBody className=" space-y-1">
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
        <Typography
          style={{ color: text_bg, fontSize: "14px", fontWeight: "bold" }}
        >
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
};

SingleData.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SingleData;
