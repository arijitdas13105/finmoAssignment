import React ,{ useState }from "react";
import { RootState } from "./redux/store";
import { removeItem, addItem, decrementItem } from "./redux/Slice/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { calculateProductPrice, calculateTotalPrice, formatPrice } from "../utils/utilityFunctions";
interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [orderPlaced, setOrderPlaced] = useState(false);

  console.log("cartItems");
  const handlePlaceOrder = () => {
   
    setOrderPlaced(true);
  };
  const handleRemoveItem = (item: any) => {
    dispatch(removeItem(item));
  };

  const handleIncrement = (item: any) => {
    dispatch(addItem(item));
  };

  const handleDecrement = (item: any) => {
    if (item.quantity > 1) {
      dispatch(decrementItem(item));
    }
  };

  // const calculateTotalPrice = () => {
  //   let total = 0;
  //   cartItems.forEach((item: any) => {
  //     total += item.price * item.quantity;
  //   });
  //   return total.toFixed(0);
  // };

  // const calculateProductPrice = (item: any) => {
  //   return (item.price * item.quantity).toFixed(0);
  // };
  const buttonStyle: React.CSSProperties = {
    minWidth: "30px",
    height: "30px",
    padding: "0 5px",
    margin: "0 5px",
    backgroundColor: "#1976d2",
    color: "white",
  };

  const textStyle: React.CSSProperties = {
    fontFamily: "'Open Sans', sans-serif",
  };
  const priceStyle: React.CSSProperties = {
    color: "#1976d2",
    fontWeight: "bold",
  };

  const totalProductPriceStyle: React.CSSProperties = {
    color: "#388e3c",
    fontWeight: "bold",
  };

  const quantityStyle: React.CSSProperties = {
    color: "#555",
    fontWeight: "bold",
  };
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty</Typography>
      ) : (
        <Grid container spacing={3}>
          {cartItems.map((item: any) => (
            <Grid item xs={12} key={item.id}>
              <Card>
                <Grid container>
                  <Grid item xs={3}>
                    <CardMedia
                      component="img"
                      alt={item.title}
                      image={item.image}
                      title={item.title}
                      style={{ maxWidth: "75%", height: "auto" }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                  <CardContent>
                      <Typography variant="h6" component="h2">
                        {item.title}
                      </Typography>
                      <Typography variant="body1" style={priceStyle}>
                        Price: {formatPrice(item.price)}
                      </Typography>
                      <Typography
                        variant="body1"
                        style={totalProductPriceStyle}
                      >
                        Total Product Price: {formatPrice(calculateProductPrice(item))}
                      </Typography>
                      <Typography variant="body2" style={quantityStyle}>
                        Quantity: {item.quantity}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        style={buttonStyle}
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </Button>
                      <Button
                        size="small"
                        style={buttonStyle}
                        onClick={() => handleDecrement(item)}
                      >
                        -
                      </Button>
                      <Button
                        size="small"
                        color="secondary"
                        style={buttonStyle}
                        onClick={() => handleRemoveItem(item)}
                      >
                        Remove
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
          <Typography variant="h6">
  Total Price: {formatPrice(calculateTotalPrice(cartItems))}
</Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={handlePlaceOrder}
              style={{ marginTop: "10px" }}
              disabled={orderPlaced}
            >
              Place Order
            </Button>
            {orderPlaced && (
              <Typography variant="h6" color="secondary" style={{ marginTop: "10px" }}>
                Order Placed Successfully!
              </Typography>
            )}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Cart;
