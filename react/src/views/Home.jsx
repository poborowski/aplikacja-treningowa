import {Link} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HomeText from "../components/home/homeText.jsx";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="homeHero">
        <div className="container">
          <div className="row">
            <HomeText/>
            <div className="col-6"><img src={"../src/assets/man2.png"} alt="Logo"/></div>
          </div>
        </div>
      </div>

      <div className="textImageHomeWrap">
        <div className="container">
          <div className="row">
            <div className="col-6"><img src={"../src/assets/man3.png"} alt="Logo"/></div>
          <HomeText/>

          </div>
        </div>
      </div>
      <div className="textImageHomeWrap">
        <div className="container">
          <div className="row">
            <HomeText/>
            <div className="col-6"><img src={"../src/assets/ma4.png"} alt="Logo"/></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
