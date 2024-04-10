import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useSelector ,useDispatch} from 'react-redux';
import { RootState } from './redux/store';
import { clearCart } from './redux/Slice/cartSlice';
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#1976d2',
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

const Logo = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  cursor: 'pointer',
}));

const Menu = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexGrow: 1, 
});

const MenuItem = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  cursor: 'pointer',
}));

const RightMenu = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userName = isLoggedIn ? localStorage.getItem('name') : 'Guest';
  const cartItems = useSelector((state: RootState) => state.cart.items);

  //  the total count of items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('name');
    localStorage.setItem('isLoggedIn', 'false'); 
    dispatch(clearCart());
    navigate('/login');
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Logo variant="h6" onClick={() => navigate('/')}>
          MyStore
        </Logo>
        <Menu>
          <MenuItem variant="body1" onClick={() => navigate('/products')}>
            Home
          </MenuItem>
          <MenuItem variant="body1" onClick={() => navigate('/products')}>
            Products
          </MenuItem>
          <MenuItem variant="body1" onClick={() => navigate('/cart')}>
            Cart ({cartItemCount})
          </MenuItem>
        </Menu>
        <RightMenu>
          {userName ? (
            <MenuItem variant="body1" onClick={handleLogout}>
              Logout
            </MenuItem>
          ) : (
            <MenuItem variant="body1" onClick={() => navigate('/login')}>
              Login
            </MenuItem>
          )}
          {userName && (
            <Typography variant="body1" style={{ marginLeft: 'auto' }}>
              Welcome, {userName}
            </Typography>
          )}
        </RightMenu>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
