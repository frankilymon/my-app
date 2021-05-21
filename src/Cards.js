import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {main_store} from "./main_store";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const  pizza = [
  {
      id: 1,
      title: 'Pepperoni',
      price: 6.99,
      image_url: 'https://iamafoodblog.com/wp-content/uploads/2015/10/meatlovers-pizza-8w.jpg',
      quantity: 0
  },
  
  {
      id: 2,
      title: 'Cheese',
      price: 8.99,
      image_url: 'http://www.htveir.is/wp-content/uploads/2014/09/chesse-pizza.jpg',
      quantity: 0
  },
  {
      id: 3,
      title: 'Pineapple',
      price: 4.50,
      image_url: 'https://www.chfusa.com/blog/wp-content/uploads/2019/08/Hawaiian-Pizza-4-1024x683.jpg',
      quantity: 0
  },
  {
      id: 4,
      title: 'Barbecue chicken',
      price: 1.50,
      image_url: 'https://aestheticbeats.com/wp-content/uploads/2020/02/Barbecue-Chicken-Pizza-1024x576.jpg',
      quantity: 0
  }
];

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    minHeight: 250,
    display: 300,
    padding: 20,
    height: 100,

  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",

  }
});

 function Cards() {


  return (
    <div className="Cards">
      
<Card>
      <CardActionArea>
        <CardMedia
          id="img"
          title="Contemplative Reptile"
          price="140"
          image_url="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
        size="small" 
        variant="contained" 
        color="secondary" >
          Add
        </Button>
      </CardActions>
    </Card>
    </div>
    
  );
}

export default Cards;