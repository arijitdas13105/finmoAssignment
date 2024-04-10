import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === "All" ? null : category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

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

  const goToProductDetails = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {[
          "All",
          ...Array.from(new Set(products.map((product) => product.category))),
        ].map((category) => (
          <Chip
            key={category}
            label={category}
            clickable
            color={selectedCategory === category ? "primary" : "default"}
            onClick={() => handleCategorySelect(category)}
            style={{ margin: "0 5px" }}
          />
        ))}
      </div>
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
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
                  onClick={() => goToProductDetails(product.id)}
                
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
