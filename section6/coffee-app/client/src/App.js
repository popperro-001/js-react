import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CoffeeInfo from './screens/CoffeeInfo';
import CoffeeShop from './screens/CoffeeShop';
import ForYourPleasure from './screens/ForYourPleasure';
import OurCoffee from './screens/OurCoffee';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<CoffeeShop/>}/>
        <Route exact path='/ourCoffee' element={<OurCoffee/>}/>
        <Route exact path='/forYourPleasure' element={<ForYourPleasure/>}/>
        <Route exact path='/coffee' element={<CoffeeInfo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
