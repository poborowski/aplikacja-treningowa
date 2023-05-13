import {Link} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="homeHero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className={"bigHeading"}>Dlaczego warto
                do nas dołączyć?</p>
              <p>Nasza siłownia oferuje nie tylko doskonałe wyposażenie,
                ale także profesjonalne wsparcie. Nasi doświadczeni
                trenerzy są gotowi doradzić i odpowiedzieć na wszystkie
                pytania, abyś mógł/mogła trenować z pełnym
                zaangażowaniem i bezpieczeństwem.</p>
            </div>
            <div className="col-6"><img src={"../src/assets/man2.png"} alt="Logo"/></div>
          </div>
        </div>
      </div>

      <div className="textImageHomeWrap">
        <div className="container">
          <div className="row">
            <div className="col-6"><img src={"../src/assets/man3.png"} alt="Logo"/></div>
            <div className="col-6">
              <p className={"bigHeading"}>Dlaczego warto
                do nas dołączyć?</p>
              <p>Nasza siłownia oferuje nie tylko doskonałe wyposażenie,
                ale także profesjonalne wsparcie. Nasi doświadczeni
                trenerzy są gotowi doradzić i odpowiedzieć na wszystkie
                pytania, abyś mógł/mogła trenować z pełnym
                zaangażowaniem i bezpieczeństwem.</p>
            </div>

          </div>
        </div>
      </div>
      <div className="textImageHomeWrap">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className={"bigHeading"}>Dlaczego warto
                do nas dołączyć?</p>
              <p>Nasza siłownia oferuje nie tylko doskonałe wyposażenie,
                ale także profesjonalne wsparcie. Nasi doświadczeni
                trenerzy są gotowi doradzić i odpowiedzieć na wszystkie
                pytania, abyś mógł/mogła trenować z pełnym
                zaangażowaniem i bezpieczeństwem.</p>
            </div>
            <div className="col-6"><img src={"../src/assets/ma4.png"} alt="Logo"/></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
