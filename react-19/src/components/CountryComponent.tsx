import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CountryComponent = ({ countryName, countryCapital }) => {
  return (
    <Card variant="outlined" sx={{ minWidth: 250, minHeight: 200 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Country - Capital
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          {countryName}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 0.5 }}>
          {countryCapital}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default CountryComponent;
