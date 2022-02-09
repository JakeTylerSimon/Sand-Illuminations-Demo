import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import LogoHead from "./LogoHead";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Story from "./Story";
import Toggle from "./Toggle";
import CheckoutProduct from "./CheckoutProduct";
import AboutUs from "./AboutUs";
import JumbotronBanner from "./JumbotronBanner";
import Footing from './Footing'
import Deals from './Deals'
import CarouselGallery from './CarouselGallery'
import ContactForm from "./ContactForm";
import Gallery from "./Gallery";
import Assembly from "./Assembly";

function App() {
  return (
    <Router>
      <div className="App">
      
        <Header />

        <div className="app_container">
          
          <Switch>  

            <Route path='/gallery'>
              <Gallery />
            </Route>

            <Route path='/assembly'>
              <Assembly />
            </Route>

            <Route path='/checkout'>
              <CheckoutProduct />
            </Route>

            <Route path='/contact'>
              <ContactForm />
            </Route>

            <Route path='/shop'>
              {/* <Product /> */}
            </Route>

            <Route path='/story'>
              <AboutUs />
              <Story />
            </Route>

            <Route path='/'>
              <JumbotronBanner />
              <Deals />
              <CarouselGallery />
              <Home />
              <Toggle />
            </Route>

          </Switch>

          <LogoHead />
          
        </div>

        <Footing />
      </div>
    </Router>
  );
}

export default App;
