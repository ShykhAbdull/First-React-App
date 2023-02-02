export const prodAction = () => {
  console.warn(" Product List (Action Called)");
  return {
    type: "Product_List",
    data:"Nothing"
  };
};
export const Product_List = "Product_List";

export const prodAction_Search = (query) => {
  return {
    type: "Product_Search",
    query
  };
};
export const Product_Search = "Product_Search";


export const Updated_Product_List = "Updated_Product_List"