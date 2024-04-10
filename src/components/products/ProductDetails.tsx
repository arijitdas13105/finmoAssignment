import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Paper, Grid, Typography, Button, CardMedia } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import { useDispatch } from 'react-redux';
import { addItem } from '../redux/Slice/cartSlice';
import useProducts from '../../utils/Hooks/useProducts';
import useLoadingAndError from '../../utils/Hooks/useLoadingAndError';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const ProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id, 10) : undefined;
  const { product, isLoading, error } = useProducts(productId);
  const navigate = useNavigate();
  const loadingOrErrorComponent = useLoadingAndError(isLoading, error);

  if (loadingOrErrorComponent) return loadingOrErrorComponent;

  
  const handleAddToCart = () => {
    if (product) {
      const cartItem: CartItem = { ...product, quantity: 1 };
      dispatch(addItem(cartItem));
    }
  };

 

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardMedia
              style={{ height: '450px', backgroundSize: 'contain', backgroundPosition: 'center' }}
              image={product.image}
              title={product.title}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="h5" color="textSecondary" style={{ margin: '20px 0' }}>
              ${product.price}
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProductDetails;



