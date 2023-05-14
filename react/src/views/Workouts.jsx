
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import Header from "../components/Header.jsx";
function ChooseWorkoutsBox() {
  const [options, setOptions] = useState([
    { id: 1, label: 'Klata', link: '/' },
    { id: 2, label: 'Plecy', link: '/' },
    { id: 3, label: 'Nogi', link: '/' },
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

export default function Workouts() {
  return (
    <div>
      <Header />
      <div className="headingBox">
        <p>Wybierz co chcesz dziś ćwiczyć</p>
      </div>
      <ChooseWorkoutsBox />
      <img className="imgFloatRight" src="../src/assets/men.png" alt="Logo" />
    </div>
  );
}
