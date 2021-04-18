import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './screens/Home'
import AboutScreen from './screens/About'
import CatalogScreen from './screens/CatalogScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Header />
      <main className="py-0">
        <Route path='/' component={HomePage} exact />
        <Route path='/about' component={AboutScreen} />
        <Route path='/catalog' component={CatalogScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/product/:sku' component={ProductScreen} />
        <Route path='/cart/' component={CartScreen} />
      </main>
      <Footer />     
    </Router>
  );
}

export default App;
