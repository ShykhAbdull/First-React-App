export const addtocart = (prod_data) => {
  console.warn(" ADD to CART (Action Called)", prod_data);
  
  return {
    type: "AddToCart",
    data: prod_data, //data contains all API item Info
  };
};

export const removetocart = (prod_data) => {
  console.warn(
    "Remove to Cart (Action Called) and ID of removed product is = ",
    prod_data
  );
  return {
    type: "RemoveToCart",
    data: prod_data, // data only contains unique ID of APi prods.
  };
};

export const emptycart = (prod_data) => {
  console.warn("Empty the Cart (Action Called)", prod_data);
  return {
    type: "EmptyCart",
    data: prod_data,
  };
};
