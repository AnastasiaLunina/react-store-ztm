import { Routes, Route } from 'react-router-dom';

import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/navigation.component';
import Auth from './components/auth/auth.component';

const App = () => {

  const Shop = () => {
    return <h1>I am shop page</h1>
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>} >
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='authentication' element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
