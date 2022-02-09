import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ListOptions from './ListOptions';
import RecipeList from './RecipeList';

const RecipiesPage = () => {
  const [sortBy, setSortBy] = useState('');

  const handleSetSortBy = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="recipes-container">
      <Autocomplete
        id="recipe-search"
        freeSolo
        options={['meow', 'hello', 'world']}
        renderInput={(params) => <TextField {...params} label="Search by recipe name or tag" />}
      />
      <ListOptions sortBy={sortBy} handleSetSortBy={handleSetSortBy} />
      <RecipeList />
    </div>
  );
};
export default RecipiesPage;
