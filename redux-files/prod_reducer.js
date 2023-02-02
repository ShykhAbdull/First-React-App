export const prodReducer = (data = [], prod_action) => {
  switch (prod_action.type) {
    case "Product_List":
      console.warn(
        "Before fetching API, Product List (Reducer Called) whose type of action is = ",
        prod_action.type,
        "and Data is = ",
        prod_action.data
      ); 
      return [...prod_action.data];

    case "Updated_Product_List":
      console.warn(
        "After Fetching API Updated Product List (Reducer Called) whose type of action is = ",
        prod_action.type
      );
      return [...prod_action.data];

    default:
      return data;
  }
};
