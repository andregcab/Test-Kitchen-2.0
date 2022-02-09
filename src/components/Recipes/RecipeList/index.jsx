import React from 'react';
import RecipeCard from './RecipeCard';
import DATA from '../../../lib/recipeData';

const RecipeList = () => (
  <div className="recipe-list">
    {DATA.map(({ title, img, rating, subtitle, createdAt, lastVersionDate }) => (
      <RecipeCard
        title={title}
        img={img}
        rating={rating}
        subtitle={subtitle}
        createdAt={createdAt}
        lastVersionDate={lastVersionDate}
      />
    ))}
  </div>
);

export default RecipeList;
