
import {Link} from "react-router-dom";

function Header() {

  return (
    <header>
      <div className="row">
        <div className="col-6">
          <img src={"../src/assets/logo.png"} alt="Logo"/>
        </div>
        <div className="col-6">
          <Link to="/">Strona Gówna</Link>
          <Link to="/treningi">Treningi</Link>
          <Link to="/logowanie">Zaloguj</Link>
          <Link to="/lista">Lista</Link>
          <Link to="/rejestracja">Rejestracja</Link>
          <Link to="/poziomy">Poziomy</Link>

        </div>
      </div>
    </header>
  );
}

export default Header;

