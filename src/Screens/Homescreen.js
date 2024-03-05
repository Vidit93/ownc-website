import Ourservices from "../Components/Ourservices"
import AboutUs from "../Components/AboutUs"
import Landingpage from "../Components/Landingpage"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import CustomerReview from "../Components/CustomerReview"
import OneStop from "../Components/OneStop"
import Numbers from "../Components/Numbers"

export default function Homescreen() {
  return (
    <div>
      {/* <Navbar /> */}
      <Landingpage />
      <Ourservices />
      <AboutUs />
      <Numbers />
      <OneStop />
      <CustomerReview />
      {/* <Footer /> */}
    </div>
  );
}