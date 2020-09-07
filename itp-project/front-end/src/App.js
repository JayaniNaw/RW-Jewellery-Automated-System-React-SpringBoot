import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import SignUp from "./components/User/SignUp/SignUp";
import Login from "./components/User/Login/Login";
import UserProfile from "./components/User/UserProfile/UserProfile";
import confirmEmail from "./components/User/UserProfile/confirmEmail";
import PurchaseContainer from "./components/User/userPurchase/PurchaseContainer";
import OnlineStore from "./components/OnlineStore/OnlineStore";
import Buy from "./components/Buy/Buy";
import IButton from "./components/Home/IButton";
import ServiceHome from "./components/Service/ServiceHome";
import RequestDelivery from "./components/Delivery/RequestingDelivery/RequestDelivery";
import DeliveryRequestsFromCustomer from "./components/Delivery/DeliveryRequestAdminView/DeliveryRequestsFromCustomer";
import AssignDriver from "./components/Delivery/AssignDriver/AssignDriver";
import DeliveryCancellRequest from "./components/Delivery/DeliverCancelRequest/DeliveryCancellRequest";
import DeliveredItems from "./components/Delivery/DeliveredItems/DeliveredItems";
import DeliveryDriver from "./components/Delivery/DeliveryDriver/DeliveryDriver";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <IButton />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={UserProfile} />
          <Route path="/confirmEmail" exact component={confirmEmail} />
          <Route path="/myDetails" exact component={PurchaseContainer} />
          <Route path="/onlinestore" exact component={OnlineStore} />
          <Route path="/buy" exact component={Buy} />
          <Route path="/services" exact component={ServiceHome} />
          <Route path="/requestdelivery" exat component={RequestDelivery} />
          <Route
            path="/deliveryadmin"
            exat
            component={DeliveryRequestsFromCustomer}
          />
          <Route path="/AssignDriver" exat component={AssignDriver} />
          <Route
            path="/DeliveryCancellRequest"
            exat
            component={DeliveryCancellRequest}
          />
          <Route path="/DeliveredItems" exat component={DeliveredItems} />
          <Route path="/DeliveryDriver" exat component={DeliveryDriver} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
