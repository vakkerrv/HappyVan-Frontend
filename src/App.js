import { BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './screens/Home'
import AboutScreen from './screens/About'
import CatalogScreen from './screens/CatalogScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'
import ResetPasswordScreen from './screens/ResetPasswordScreen'
import ResetPasswordConfirmScreen from './screens/ResetPasswordConfirmScreen'
import ResetPasswordSentScreen from './screens/ResetPasswordSentScreen'
import SetPasswordScreen from './screens/SetPasswordScreen'

import RegisterAddressScreen from './screens/RegisterAddressScreen'
import PaymentScreen from './screens/PaymentScreen'
import SelectPlanScreen from './screens/SelectPlanScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import WishlistScreen from './screens/WishlistScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import PaymentSubscriptionScreen from './screens/PaymentSubscriptionScreen'
import PaymentOrderScreen from './screens/PaymentOrderScreen'

import Header from './components/Header'
import Footer from './components/Footer'

import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="py-0">
        <Route path='/' component={HomePage} exact />
        <Route path='/about' component={AboutScreen} />
        <Route path='/catalog' component={CatalogScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} exact/>
        <Route path='/reset_password' component={ResetPasswordScreen} />
        <Route path='/reset_password_sent' component={ResetPasswordSentScreen} />
        <Route path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirmScreen} />
        <Route path='/set_password' component={SetPasswordScreen} />
        <Route path='/register/address/plan-:planId' component={RegisterAddressScreen} />
        <Route path='/register/plan' component={SelectPlanScreen} />
        <Route path='/register/payment' component={PaymentScreen} />
        <Route path='/profile' component={ProfileScreen} />
        
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart' component={CartScreen} />
        <Route path='/wishlist' component={WishlistScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/sub_payment/plan-:id/' component={PaymentSubscriptionScreen} />
        <Route path='/order_payment/:id' component={PaymentOrderScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
