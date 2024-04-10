// // utils/formatPrice.ts
// export const formatPrice = (price: number): string => {
//     return `$${price.toFixed(2)}`;
//   };
  

// utils/formatPrice.ts
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};


  // utils/calculateTotalPrice.ts
interface CartItem {
    price: number;
    quantity: number;
  }
  
// utils/calculateTotalPrice.ts
export const calculateTotalPrice = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

  

interface CartItem {
  price: number;
  quantity: number;
}



export const calculateProductPrice = (item: CartItem): number => {
  return item.price * item.quantity; // This returns a number
};
