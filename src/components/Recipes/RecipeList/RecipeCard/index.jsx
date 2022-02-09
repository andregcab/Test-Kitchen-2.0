import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { CardActionArea } from '@mui/material';

const RecipeCard = ({ title, img, rating, subtitle, createdAt, lastVersionDate }) => (
  <Card sx={{ minWidth: 350, maxWidth: 350, margin: '20px' }}>
    <CardActionArea>
      <CardMedia component="img" height="140" image={img} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography className="rating" mt={2}>
          <Rating
            name="text-feedback"
            value={rating}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon fontSize="inherit" />}
          />
        </Typography>
        <Typography my={1} variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
        <div className="time-stamps">
          <Typography variant="caption" color="text.secondary">
            Created at: {moment(createdAt).format('l')}
          </Typography>
          <Typography marginLeft={3} variant="caption" color="text.secondary">
            Last Version: {moment(lastVersionDate).format('l')}
          </Typography>
        </div>
      </CardContent>
    </CardActionArea>
  </Card>
);

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  lastVersionDate: PropTypes.string.isRequired,
};

export default RecipeCard;
