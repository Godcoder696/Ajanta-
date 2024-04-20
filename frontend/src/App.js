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
import AboutUs from './Pages/AboutUs';
import Admin from './Pages/Admin';

// router paths
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route path='/' element={<RootLayout/>}  errorElement={<Error/>}>
        <Route index element={<Home/>}/>
        <Route index path='/men' element={<Men/>}/>
        <Route index path='/women' element={<Women/>}/>
        <Route index path='/about us' element={<AboutUs/>}/>
      </Route>
      {/* <Route path='/admin' element={<Admin/>}/> */}
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