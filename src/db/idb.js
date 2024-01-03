import Dexie from "dexie";

const db = new Dexie("MyDatabase");

db.version(1).stores({
  cart: "++productId",
});

const addToCart = async (product) => {
  try {
    await db.cart.add(product);
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
};

const updateCartItem = async (productId, product) => {
  try {
    await db.cart.update(productId, product);
  } catch (error) {
    console.error("Error updating cart item:", error);
  }
};

const removeCartItem = async (cartItemId) => {
  try {
    await db.cart.delete(cartItemId);
  } catch (error) {
    console.error("Error removing cart item:", error);
  }
};

const getCartItems = async () => {
  try {
    const cartItems = await db.cart.toArray();
    return cartItems;
  } catch (error) {
    console.error("Error getting cart items:", error);
  }
};

export { db, addToCart, updateCartItem, removeCartItem, getCartItems };
