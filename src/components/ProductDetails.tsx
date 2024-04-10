import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Paper, Grid, Typography, Button, CardMedia } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './redux/Slice/cartSlice';
// import { setCartProducts } from './redux/Slice/userSlice';


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
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then((data: Product) => setProduct(data))
      .catch(error => console.error('Error fetching product details: ', error));
  }, [id]);
  const currentCartProducts = useSelector((state: any) => state.user.cartProducts);

  const handleAddToCart = () => {
    console.log(product);
    
    if (product) {
      const cartItem: CartItem = { ...product, quantity: 1 }; 

    }
  };

  if (!product) {
    return <div>Loading...</div>;
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



//-----------------------

