import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login.jsx";
import Home from "./views/Home.jsx";
import Signup from "./views/Signup.jsx";
import Workouts from "./views/Workouts.jsx";
import Lvls from "./views/Lvls.jsx";
import List from "./views/List.jsx";
import TrainingDate from "./views/TrainingDate.jsx";
import Statistics from "./views/Statistics.jsx";

const router = createBrowserRouter([
  {
    path: '/logowanie',
    element: <Login/>
  },
  {
    path: '/rejestracja',
    element: <Signup/>
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/treningi',
    element: <Workouts/>
  },
  {
    path: '/poziomy',
    element: <Lvls/>
  },
  {
    path: '/lista',
    element: <List/>
  },
  {
    path: '/data-treningu',
    element: <TrainingDate/>
  },
  {
    path: '/statystyki',
    element: <Statistics/>
  }
])
export default router;
