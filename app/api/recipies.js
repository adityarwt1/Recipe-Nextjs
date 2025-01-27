// pages/api/recipes.js
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("test"); // Use the "test" database

    // Fetch data from the "recipe" collection
    const recipes = await db.collection("recipe").find({}).toArray();

    // Respond with the data
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
}
