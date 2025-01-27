"use client";

import { useState } from "react";

const RecipeApp = ({ initialRecipes }) => {
  const [recipes, setRecipes] = useState(initialRecipes);

  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleAddRecipe = () => {
    if (newRecipe.title && newRecipe.description && newRecipe.image) {
      setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
      setNewRecipe({ title: "", description: "", image: "" });
    }
  };

  const handleRemoveRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Recipe List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-40 w-full object-cover text-black"
            />
            <div className="p-4 flex-1">
              <h2 className="text-xl font-semibold text-black">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.description}</p>
            </div>
            <button
              onClick={() => handleRemoveRecipe(recipe.id)}
              className="bg-red-500 text-white py-2 hover:bg-red-600"
            >
              Remove Recipe
            </button>
          </div>
        ))}
      </div>

      {/* Add Recipe Form */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Recipe Title"
            value={newRecipe.title}
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, title: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Recipe Description"
            value={newRecipe.description}
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, description: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <input
            type="text"
            placeholder="Image URL"
            value={newRecipe.image}
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, image: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleAddRecipe}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
          >
            Add Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeApp;
