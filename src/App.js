import './App.css';

// react-router-dom import
import {
  Route,
  RouterProvider,
  createBrowserRouter, 
  createRoutesFromElements
} 
from 'react-router-dom'

// Pages import
import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Error from './Pages/Error';

// RootLayout import
import RootLayout from './Layouts/RootLayout';

// Chakra Ui Imp
import {ChakraProvider} from '@chakra-ui/react'

// https://img.freepik.com/free-photo/colorful-beautiful-flowers-background-blossom-floral-bouquet-decoration-garden-flowers-plant-vertical-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1099.jpg?w=360&t=st=1703603259~exp=1703603859~hmac=bccf211a9d99c8e4e78b6c9614de284ebe18ce162cb18cb23e8a5f670f0ec821

// router paths
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} errorElement={<Error/>}>
      <Route index element={<Home/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/admin' element={<Home/>}/>
    </Route>
  )  
)

function App() {
  return (
    <ChakraProvider>
        <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;