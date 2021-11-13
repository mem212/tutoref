import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {

    const anchorStyle = {
        textDecoration: "none"
    };

    const justifyContentStyle = {
        display: 'flex', 
        justifyContent:'center',
        alignItems:'center'
    };

    return (
      <div className="col col--3 margin-bottom--lg" >
        <Card sx={{ maxWidth: 345}}>
            <div style={justifyContentStyle}>
                <CardMedia
                component="img"
                image={"/static/img/cards/"+props.icon}
                alt="green iguana"
                sx={{width: 128}}
                />
            </div>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={justifyContentStyle}>
                {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{display: 'flex',  textAlign:'center', alignItems:'center'}}>
                {props.description}
            </Typography>
            </CardContent>
            <CardActions sx={justifyContentStyle}>
                <a href={props.link} style={anchorStyle}><Button size="small">Learn More</Button></a>
            </CardActions>
        </Card>
      </div>
    );
}
