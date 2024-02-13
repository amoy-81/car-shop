import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CarImage from '@/assets/images/405.jpg'
import Image from "next/image";

export function CardComponent() {
  return (
    <Card sx={{ maxWidth: 345 }}    >
      <CardActionArea>
        <Image src={CarImage} className=" w-full" height="140" alt="new car" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            پژو ۴۰۵
          </Typography>
          <Typography variant="body2" color="text.secondary">
            یک خودروی سدان سایز متوسط ساخت شرکت پژو کشور فرانسه، نسل پنجم از سری
            چهار (سدان متوسط) شرکت پژو است
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          بیشتر
        </Button>
      </CardActions>
    </Card>
  );
}
