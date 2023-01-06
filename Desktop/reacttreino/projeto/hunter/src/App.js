import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Ficha from './components/project/FormFichas';
import Home from './components/pages/Home';
import Cadastro from './components/pages/Cadastro';
import Container from './components/layouts/Container';


import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    
      <Router> 
        <Navbar />
        
        <Container customClass="min-height">
          <Routes>
          
              <Route exact path='/' element={<Home />} />
              <Route exact path='/Ficha' element={<Ficha />} />          
              <Route exact path='/Cadastro' element={<Cadastro />} />
              
          </Routes>  
          
        </Container>
        <Footer />
      </Router>   
      
      
      
      
  );
}

export default App;
