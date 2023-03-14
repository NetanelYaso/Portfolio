import './App.css';
import Home from './components/pages/Home/Home';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/features/Header/Header';
import About from './components/pages/About/About';
import Projects from './components/pages/Projects/Projects';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <>
      <ChakraProvider>
        <Header/>
        <Home />
        <Projects/>
         <About/>
       <Contact/>
      </ChakraProvider>
   
    </>
  );
}

export default App;
