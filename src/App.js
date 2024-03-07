import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homescreen from "./Screens/Homescreen"
import Ourservices from "./Components/Ourservices"
import AboutUs from "./Components/AboutUs"
import Landingpage from "./Components/Landingpage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import CustomerReview from "./Components/CustomerReview"
import OneStop from "./Components/OneStop"
import Numbers from "./Components/Numbers"
import Webservices from "./Screens/Webservices"
import Appservices from "./Screens/Appservices"
import Graphicservices from "./Screens/Graphicservices"
import Videoservices from "./Screens/Videoservices"
import Contentservices from "./Screens/Contentservices"
import ScrollToTop from './Components/ScrollTop';
import Privacypolicy from './Screens/Privacypolicy';
import TermsConditions from './Screens/Terms&Conditions';
import ContactUs from './Components/ContactUs';
import TechCarousel from './Components/Technology';

export default function MyApp() {
  return (
    <div>
      {/* <Landingpage />
      <Ourservices />
      <AboutUs />
      <Numbers />
      <OneStop />
    <CustomerReview /> */}
      {/* <Webservices /> */}
      {/* <Appservices /> */}
      {/* <Graphicservices /> */}
      {/* <Videoservices /> */}
      {/* <Contentservices /> */}
      {/* <Homescreen /> */}
      {/* <Privacypolicy /> */}
      {/* <TermsConditions /> */}
      {/* <TechCarousel /> */}
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/webservices" element={<Webservices />} />
          <Route path="/appservices" element={<Appservices />} />
          <Route path="/graphicservices" element={<Graphicservices />} />
          <Route path="/videoservices" element={<Videoservices />} />
          <Route path="/contentservices" element={<Contentservices />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/terms&conditions" element={<TermsConditions />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}