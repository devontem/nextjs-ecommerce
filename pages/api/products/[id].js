import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
  try {
    const { query } = req;
    const { id } = query;

    const SHOPIFY_API_URL = `${process.env.SHOPIFY_API_BASE_URL}/products/${id}.json`;
    const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;

    const response = await fetch(SHOPIFY_API_URL, {
      headers: {
        "X-Shopify-Access-Token": accessToken,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from Shopify API");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
