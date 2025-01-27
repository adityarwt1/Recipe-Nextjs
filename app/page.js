import clientPromise from "@/lib/mongodb";
import RecipeApp from "../components/RecipeApp";


export default async function Home() {
  
  // Fetch data on the server side
  const client = await clientPromise;
  const db = client.db("test");
  const recipes = await db.collection("recipe").find({}).toArray();

  const serializedRecipes = recipes.map((recipe) => ({
    id: recipe._id.toString(), // Convert ObjectId to string
    title: recipe.title,
    description: recipe.description,
    image: recipe.image,
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Recipe App</h1>
      <RecipeApp initialRecipes={serializedRecipes} />
    </div>
  );
}
