import { BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './screens/Home'
import AboutScreen from './screens/About'
import CatalogScreen from './screens/CatalogScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'
import RegisterAddressScreen from './screens/RegisterAddressScreen'
import PaymentScreen from './screens/PaymentScreen'
import SelectPlanScreen from './screens/SelectPlanScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import WishlistScreen from './screens/WishlistScreen'
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
        <Route path='/register' component={RegisterScreen} exact/>
        <Route path='/register/address' component={RegisterAddressScreen} />
        <Route path='/register/plan' component={SelectPlanScreen} />
        <Route path='/register/payment' component={PaymentScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/' component={CartScreen} />
        <Route path='/wishlist/' component={WishlistScreen} />
      </main>
      <Footer />     
    </Router>
  );
}

export default App;
