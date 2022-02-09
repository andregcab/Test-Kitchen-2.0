import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ListOptions = ({ sortBy, handleSetSortBy }) => (
  <div className="options">
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          defaultValue="created"
          label="Sort By"
          onChange={handleSetSortBy}
        >
          <MenuItem value="created">Date Created</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
          <MenuItem value="modified">Date Modified</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <IconButton color="default" aria-label="upload picture" component="span">
      <GridViewIcon />
    </IconButton>
    <IconButton color="default" aria-label="upload picture" component="span">
      <FormatListBulletedIcon />
    </IconButton>
  </div>
);

ListOptions.propTypes = {
  sortBy: PropTypes.string.isRequired,
  handleSetSortBy: PropTypes.func.isRequired,
};
export default ListOptions;
