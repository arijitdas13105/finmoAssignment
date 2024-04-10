import React, { useState } from "react";
import { Grid, Container, Chip } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import useProducts from "../../utils/Hooks/useProducts";
import useLoadingAndError from "../../utils/Hooks/useLoadingAndError";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

const Products: React.FC = () => {
  const { products, isLoading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  const loadingOrErrorComponent = useLoadingAndError(isLoading, error);

  if (loadingOrErrorComponent) return loadingOrErrorComponent;
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === "All" ? null : category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

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
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
