import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 1,
      title: "Chapati",
      price: +5,
      discription:
        "Roti is made from wheat so it has more nutrients when compared to rice.",
      img: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-how-to-make-soft-roti-phulka-recipe-chapati-video-recipe.jpg",
    },
    {
      id: 2,
      title: "Daal",
      price: 40,
      discription:
        "While sometimes used in other dishes, porridge-like dish that's also called dal.",
      img: "https://maayeka.com/wp-content/uploads/2011/12/punchwati.jpg",
    },
    {
      id: 3,
      title: "Paneer-Dish",
      price: 70,
      discription:
        "A gravy-based dish with many thick cheese cubes together with some vegetables and spices.",
      img: "https://static.toiimg.com/photo/53251884.cms",
    },
    {
      id: 4,
      title: "Pickle",
      price: 30,
      discription:
        "Mango pickle is a spicy condiment made with raw mango, spice powders, salt, garlic & oil.",
      img: "https://i.ndtvimg.com/i/2017-02/pickle-620x350_620x350_51487758433.jpg",
    },
    {
      id: 5,
      title: "Curd",
      price: 30,
      discription:
        " curd is one of the richest source of protein, calcium and minerals",
      img: "https://5.imimg.com/data5/DJ/OA/JR/SELLER-23947743/pure-curd-village-curd-no-artificial-only-natural-1000x1000.jpg",
    },
    {
      id: 6,
      title: "Gulab Jamun",
      price: 40,
      discription:
        "Gulab jamun is a sweet confectionery or dessert, originating in the Indian subcontinent ",
      img: "https://aartimadan.com/wp-content/uploads/2020/11/milk-powder-gulab-jamuns.jpg",
    },
  ],
  checkOutCart: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    add: (state, action) => {
      let presentItem = state.checkOutCart.find(
        (ele) => ele.id == action.payload.id
      );
      if (presentItem) {
        presentItem.quantity++;

        let filterItem = state.checkOutCart.filter(
          (ele) => ele.id != action.payload.id
        );
        state.checkOutCart = [...filterItem, presentItem];
      } else {
        state.checkOutCart.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      let updated = state.checkOutCart.filter(
        (ele) => ele.id != action.payload.id
      );
      state.checkOutCart = [...updated];
    },
    less: (state, action) => {
      let presentItem = state.checkOutCart.find(
        (ele) => ele.id == action.payload.id
      );
      if (presentItem.quantity == 1) {
        let updated = state.checkOutCart.filter(
          (ele) => ele.id != action.payload.id
        );
        state.checkOutCart = [...updated];
      } else if (presentItem) {
        presentItem.quantity--;

        let filterItem = state.checkOutCart.filter(
          (ele) => ele.id != action.payload.id
        );
        state.checkOutCart = [...filterItem, presentItem];
      }
    },
  },
});
export const { add, remove, less } = storeSlice.actions;
export default storeSlice.reducer;
