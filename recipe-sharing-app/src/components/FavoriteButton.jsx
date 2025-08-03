import { useRecipeStore } from '../store/recipeStore';

const FavoriteButton = ({ id }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(id);

  const toggleFavorite = () => {
    isFavorite ? removeFavorite(id) : addFavorite(id);
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? '★ Remove Favorite' : '☆ Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
