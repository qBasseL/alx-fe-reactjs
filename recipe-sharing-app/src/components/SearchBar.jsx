// src/components/SearchBar.jsx
import { useRecipeStore } from '../recipeStore';
import { useEffect } from 'react';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
