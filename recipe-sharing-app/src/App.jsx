import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; // ✅ Add this
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>🍽️ Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar /> {/* ✅ Render here */}
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

<Routes>
  <Route
    path="/"
    element={
      <>
        <SearchBar />
        <AddRecipeForm />
        <RecipeList />
        <FavoritesList />           {/* ✅ */}
        <RecommendationsList />    {/* ✅ */}
      </>
    }
  />
  <Route path="/recipe/:id" element={<RecipeDetails />} />
</Routes>