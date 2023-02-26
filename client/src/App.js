// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
// import Router from './Router';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/features/Header/Header';

function App() {
  return (
    <>
      <ChakraProvider>
        <Header/>
        <Home />
      </ChakraProvider>
   
    </>
  );
}

export default App;
