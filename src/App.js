import './App.scss';
import Swiper from 'swiper';
import 'swiper/css';
import './assets/boxicons-2.1.1/boxicons-2.1.1/css/boxicons.min.css';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesConfig from './config/RoutesConfig';
function App() {
  return (
    <BrowserRouter>
        <Header />
        <RoutesConfig/>
        <Footer />
    </BrowserRouter>
  )
}

export default App;
