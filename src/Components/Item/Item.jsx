import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({element}) => {
  return (
    <div style={{
      transform: "translate(0px, 50%)",
    }}> 
    <Card style={{backgroundColor:"#3B8686"}}sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={element.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {element.title}
          </Typography>
          <Typography variant="body2" marginBottom={1} color="white">
            {element.description}
          </Typography>
          <Typography variant="h5" color="white">
            ${element.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/item/${element.id}`} style={{textDecoration: "none", color:"inherit"}}>
        <Button style={{backgroundColor: "#21b6ae"}}  size="small"  variant="contained" >
          Detalles del producto
        </Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  )
}

export default Item
