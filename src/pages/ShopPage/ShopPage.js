import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";

const ShopPage = () => {
  return (
    <div>
      <div className="shop-content">
        <Navbar></Navbar>
        <Banner></Banner>
        <Categories></Categories>
        This is home page content
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ShopPage;
