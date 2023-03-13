import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({element}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={element.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {element.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" marginBottom={1}>
            {element.description}
          </Typography>
          <Typography variant="h5" color="#00796b">
            ${element.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/item/${element.id}`} style={{textDecoration: "none", color:"inherit"}}>
        <Button size="small" color="primary">
          Detalles del producto
        </Button>
        </Link>
      </CardActions>
    </Card>
    
  )
}

export default Item
