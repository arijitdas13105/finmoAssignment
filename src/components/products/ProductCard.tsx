// ProductCard.tsx
import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    image: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const cardStyle: React.CSSProperties = {
    height: "450px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  const priceStyle: React.CSSProperties = {
    fontSize: "1.2em",
    fontWeight: "bold",
    color: "#e53935",
    padding: "5px 10px",
    borderRadius: "5px",
    marginTop: "10px",
  };
  const cardMediaStyle: React.CSSProperties = {
    height: "60%",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  const goToProductDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card style={cardStyle}>
      <CardMedia
        style={cardMediaStyle}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 400,
          }}
        >
          {product.title}
        </Typography>

        <Typography variant="body1" style={priceStyle}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={goToProductDetails}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
