import Ourservices from "./Components/Ourservices"
import AboutUs from "./Components/AboutUs"
import Landingpage from "./Components/Landingpage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import CustomerReview from "./Components/CustomerReview"
import OneStop from "./Components/OneStop"

export default function MyApp() {
  return (
    <div>
      <Navbar />
      <Landingpage />
      <Ourservices />
      <AboutUs />
      <OneStop />
      <CustomerReview />
      <Footer />
    </div>
  );
}