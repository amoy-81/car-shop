import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";
import { green, yellow } from "@mui/material/colors";

const statusMessage = {
  expectation: "در انتظار تحویل...",
  delivered: "تحویل شده",
};

function OrderCard({ id, name, description, status, image }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <CardActionArea>
        <Image
          src={`${image}`}
          className=" w-full h-64"
          width={140}
          height={100}
          priority={true}
          alt="new car"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.substring(0, 25)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className=" text-center w-full">
          <h3
            style={{
              color: status === "expectation" ? yellow[800] : green[800],
            }}
          >
            {statusMessage[status]}
          </h3>
        </div>
      </CardActions>
    </Card>
  );
}

export default OrderCard;
