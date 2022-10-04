import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
