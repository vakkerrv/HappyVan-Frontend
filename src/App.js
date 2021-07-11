import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './screens/Home'
// import AboutScreen from './screens/About'
import AboutSwapie from './screens/AboutSwapie'
import CatalogScreen from './screens/CatalogScreen/CatalogScreen'
// import LoginScreen from './screens/RegisterScreens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreens/RegisterScreen'
// import RegisterAddressScreen from './screens/RegisterScreens/RegisterAddressScreen'
import RegisterTariffScreen from './screens/RegisterScreens/RegisterTariffScreen'
// import ResetPasswordScreen from './screens/ResetPasswordScreen'
// import ResetPasswordConfirmScreen from './screens/ResetPasswordConfirmScreen'
// import ResetPasswordSentScreen from './screens/ResetPasswordSentScreen'
// import SetPasswordScreen from './screens/SetPasswordScreen'

// import PaymentScreen from './screens/PaymentScreen'
import PricingScreen from './screens/PricingScreen/PricingScreen'
import ProductScreen from './screens/ProductScreen/ProductScreen'
import CartScreen from './screens/CartScreen/CartScreen'
// import WishlistScreen from './screens/WishlistScreen'
// import PlaceOrderScreen from './screens/PlaceOrderScreen'
// import PaymentSubscriptionScreen from './screens/PaymentSubscriptionScreen'
// import PaymentOrderScreen from './screens/PaymentOrderScreen'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ThankYouScreen from './screens/ThankYouScreen'
import PersonalDataPolicy from './screens/PersonalDataPolicy'

import ScrollToTop from './components/ScrollToTop'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

import './style/StyleApp.scss'
import './style/slick.css'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <ToastContainer />

        <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/about' component={AboutSwapie} />
        <Route path='/catalog' component={CatalogScreen} />
{/*        <Route path='/login' component={LoginScreen} />*/}
        <Route path='/register' component={RegisterScreen} exact/>
{/*        <Route path='/reset_password' component={ResetPasswordScreen} />
        <Route path='/reset_password_sent' component={ResetPasswordSentScreen} />
        <Route path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirmScreen} />
        <Route path='/set_password' component={SetPasswordScreen} />
        <Route path='/register/address/plan-:planId' component={RegisterAddressScreen} />*/}
        <Route path='/register/tariff' component={RegisterTariffScreen} />
{/*        <Route path='/register/payment' component={PaymentScreen} />*/}
        <Route path='/profile' component={ProfileScreen} />
        
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart' component={CartScreen} />
{/*        <Route path='/wishlist' component={WishlistScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/sub_payment/plan-:id/' component={PaymentSubscriptionScreen} />
        <Route path='/order_payment/:id' component={PaymentOrderScreen} />*/}

        <Route path='/pricing' component={PricingScreen} />

        <Route path='/thankyou' component={ThankYouScreen} />
        <Route path='/policy' component={PersonalDataPolicy} />

        <Route>
          <div>No match</div>
        </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
