import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/Darktheme';
import { CssBaseline } from '@mui/material';
import { Navbar } from './component/Navbar/navbar';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Profile from './component/Profile/Profile';
import { CustomerRoute } from './Routers/CustomerRoute';
import Cart from './component/Cart/Cart';

function App() {
    return ( 
    <ThemeProvider theme = { darkTheme } >
        <CssBaseline />
       {/*<Navbar />*/}
        { /* <Home> */ } 
        {/*<RestaurantDetails/>*/}
        <Cart/>
       {/*<Profile />*/} 
       {/*<CustomerRoute/>*/}
   </ThemeProvider>);
}

export default App;