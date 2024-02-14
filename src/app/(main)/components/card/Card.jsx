import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export function CardComponent({ id, name, description, image }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Image
          src={`${image}`}
          className=" w-full h-64"
          width={140}
          height={100}
          alt="new car"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.substring(0, 100)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/product/${id}`}>
          <Button size="small" color="primary">
            بیشتر
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
