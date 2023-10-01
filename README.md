# Next.js E-Commerce Shopify App

Simple application to display products from a Shopify store, and manage a cart.

## Pages

### `pages/index.js`

Homepage

### `pages/products.js`

This page displays a list of products fetched from the Shopify store.

### `pages/products/[id].js`

This page displays the details of a specific product based on its `id` parameter in the URL. It also allows users to add the product to the shopping cart.

### `pages/cart.js`

This page shows the contents of the shopping cart. Users can view the items in the cart, remove items, and checkout.

## API Routes

### `pages/api/products.js`

This API route fetches a list of products from the Shopify store using the Shopify API.

### `pages/api/products/[id].js`

This dynamic API route fetches the details of a specific product based on its `id` param.

## Libraries and Services

- **React Query**: Used for data fetching and caching.
- **Redux Toolkit**: Manages the shopping cart state.
- **React Toastify**: Provides toast notifications for user feedback.
- **Shopify API**: Integrated to fetch product data from a store.

## Getting Started

1. Clone this repository.
2. Create a Shopify store and obtain the required API credentials.
3. Create a `.env.local` file in the project root and add your Shopify API credentials:

   ```
   SHOPIFY_API_BASE_URL=https://[insert-store-url].myshopify.com/admin/api/2023-07
   SHOPIFY_ACCESS_TOKEN=your-access-token
   ```

4. Install dependencies:

   ```
   npm install
   ```

5. Start the development server:

   ```
   npm run dev
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

## Features

- Browse a list of products.
- View product details.
- Add products to the shopping cart.
- Remove products from the shopping cart.
- View the shopping cart contents.
- Receive toast notifications for cart actions
