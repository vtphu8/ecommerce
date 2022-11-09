import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import ProductList from "../../components/ProductList/TrendingList";
import Popup from "../../components/Popup/Popup";
import "./HomePage.css";
const HomePage = () => {
  const show = useSelector((state) => state.popup.showPopup);
  const popupData = useSelector((state) => state.popup.data);

  return (
    <div>
      <div className="home-content">
        <Navbar></Navbar>
        <Banner></Banner>
        <Categories></Categories>
        <ProductList></ProductList>
        {show === true ? <Popup propductData={popupData}></Popup> : <></>}
        This is home page content
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
