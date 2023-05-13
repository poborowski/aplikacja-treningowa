import {Link} from "react-router-dom";
import Header from "../components/Header.jsx";

export default function Workouts() {
  return (<div>
    <Header />
    <div className="headingBox">
      <p>Wybierz partię ciała którą chcesz ćwiczyć</p>
    </div>
    <div className="chooseOptionBox">
      <div className="choosenBox">
        <Link to="/">Klata</Link>
      </div>
      <div className="choosenBox">
        <Link to="/">Plecy</Link>
      </div>
      <div className="choosenBox">
        <Link to="/">Nogi</Link>
      </div>
    </div>
    <img className="imgFloatRight" src={"../src/assets/men.png"} alt="Logo"/>
  </div>)
}
