import {Link} from "react-router-dom";
import Header from "../components/Header.jsx";

export default function Lvls() {
  return (<div>
    <Header />
    <div className="headingBox">
      <p>Wybierz poziom trudności ćwiczeń</p>
    </div>
    <div className="chooseOptionBox">
      <div className="choosenBox">
        <Link to="/">Początkujący</Link>
      </div>
      <div className="choosenBox">
        <Link to="/">Średni</Link>
      </div>
      <div className="choosenBox">
        <Link to="/">Zaawansowany</Link>
      </div>
    </div>
    <img className="imgFloatRight" src={"../src/assets/men.png"} alt="Logo"/>
  </div>)
}
