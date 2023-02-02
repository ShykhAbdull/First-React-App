export const cart_details_reducer = (data = [], action) => {
  switch (action.type) {
    case "AddToCart":
      action.data.length += 1;
      console.warn(
        "Add To Cart (Reducer Called) and type of action is = ",
        action.type,
        action.data
      );

      return [action.data, ...data];

    case "RemoveToCart":
      console.warn(
        "Remove To Cart (Reducer Called) and type of action is = ",
        action.type,
        "&& ID of Removed Data is = ",
        [action.data]
      );

      const remain = data.filter((val) => val.id !== action.data)
      return [...remain]

      // let ids = {};
      // let dups = [];

      // data.forEach((val) => {
      //   if (ids[val.id]) {
      //     // we have already found this same id
      //     dups.push(val);
      //   } else {
      //     ids[val.id] = true;
      //   }
      // });

      // if (dups.length && data[0].id === action.data) {  
      
      //   const remain = data.filter((val) => val[0] )
      //   console.warn(remain);
      //   return [...data];
      // } else if (!dups.length && data[0].id === action.data) {
      //   data.length = data.length ? (data.length -= 1) : [];
      //   return [...data];
      // } else {
      //   data.length = 0;
      //   return [...data];
      // }

    case "EmptyCart":
      data.length = 0;
      console.warn(
        "Empty The Cart (Reducer Called) and type of action is = ",
        action.type,
        "&& Length of Data List is = ",
        data.length
      );

      return [...data];

    default:
      return data;
  }
};
