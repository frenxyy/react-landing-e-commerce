import {Routes, Route} from 'react-router-dom'

import NavbarCompoment from './components/navbarComponents';
import FooterComponent from './components/FooterComponent';

import homepage from './pages/homepage';
import menuPage from './pages/menuPage';
import TestimoniPage from './pages/testimonialPage';
import FaqPage from './pages/faqpage';

function App() {
  return (
    <div>
      <NavbarCompoment />

      <Routes>
        <Route path="/" Component={homepage} />
        <Route path="/layanan" Component={menuPage} />
        <Route path="/testimonial" Component={TestimoniPage} />
        <Route path="/faq" Component={FaqPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App
