import { Routes, Route } from 'react-router-dom';

import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/navigation.component';
import Auth from './components/auth/auth.component';
import Shop from './components/routes/shop/shop.component';
import Checkout from './components/routes/checkout/checkout.component';


const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>} >
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='authentication' element={<Auth />} />
          <Route path='checkout' element={<Checkout />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
