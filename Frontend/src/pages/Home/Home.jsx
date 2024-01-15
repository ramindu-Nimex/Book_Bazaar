import Banner from "../../components/Banner"
import MyFooter from "../../components/MyFooter"
import NavBar from "../../components/NavBar"
import BestSellerBooks from "./BestSellerBooks"
import FavBook from "./FavBook"
import OtherBook from "./OtherBook"
import PromoBanner from "./PromoBanner"
import Review from "./Review"


const Home = () => {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBook/>
      <Review/>
      <MyFooter/>
    </div>
  )
}

export default Home