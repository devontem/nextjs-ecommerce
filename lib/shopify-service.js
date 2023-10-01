function formatPrice(variants) {
  return variants && variants[0] && variants[0].price ? variants[0].price : 0;
}

export const fetchAllProducts = async () => {
  const response = await fetch("/api/products");
  if (response.ok) {
    const data = await response.json();

    // transforming data for front-end
    const results = data.products.map(({ id, title, image, variants }) => {
      return {
        id,
        title,
        image,
        price: formatPrice(variants),
      };
    });
    return results;
  } else {
    throw new Error("Failed to fetch all products");
  }
};

export const fetchProductById = async (productId) => {
  const response = await fetch(`/api/products/${productId}`);
  if (response.ok) {
    const data = await response.json();
    const { id, title, image, variants } = data.product;
    // transforming data for front-end
    return {
      id,
      title,
      image,
      price: formatPrice(variants),
    };
  } else {
    throw new Error("Failed to fetch all products");
  }
};
