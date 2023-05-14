import {Link} from "react-router-dom";
import React, { useState } from 'react';
import Header from "../components/Header.jsx";
function ChooseOptionBox() {
  const [options, setOptions] = useState([
    { id: 1, label: 'Początkujący', link: '/' },
    { id: 2, label: 'Średni', link: '/' },
    { id: 3, label: 'Zaawansowany', link: '/' },
  ]);

  return (
    <div className="chooseOptionBox">
      {options.map((option) => (
        <div key={option.id} className="choosenBox">
          <Link to={option.link}>{option.label}</Link>
        </div>
      ))}
    </div>
  );
}

export default function Lvls() {
  return (
    <div>
      <Header />
      <div className="headingBox">
        <p>Wybierz poziom trudności ćwiczeń</p>
      </div>
      <ChooseOptionBox />
      <img className="imgFloatRight" src="../src/assets/men.png" alt="Logo" />
    </div>
  );
}
