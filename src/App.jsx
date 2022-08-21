import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Button, Page, Text } from '@geist-ui/core'

import './App.css'
import Login from "./pages/Login";
import SetupCollateral from "./pages/SetupCollateral";
import CreateOffer from "./pages/CreateOffer";
import AcceptTerms from "./pages/AcceptTerms";
import StartPaying from "./pages/StartPaying";

import InvestorOffers from "./pages/InvestorOffers";
import InvestorOfferDetails from "./pages/InvestorOfferDetails";
import InvestorEarning from "./pages/InvestorEarning";


export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/collateral" component={SetupCollateral} />
          <Route exact path="/create-offer" component={CreateOffer} />
          <Route exact path="/accept-terms" component={AcceptTerms} />
          <Route exact path="/start-paying" component={StartPaying} />


          <Route exact path="/investor-offers" component={InvestorOffers} />
          <Route exact path="/investor-offer-details" component={InvestorOfferDetails} />
          <Route exact path="/investor-earning" component={InvestorEarning} />
        </Switch>
    </Router>
  )
}
