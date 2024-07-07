import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import AuthContext from "./contexts/authContext";
import Path from "./paths";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/game-details/GameDetails";

function App() {
  const [auth, setAuth] = useState({});

  const navigate = useNavigate();
  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    navigate(Path.Home);
  };
  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <div id="box">
        <Header />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Games} element={<GameList />} />
          <Route path={Path.GamesCreate} element={<GameCreate />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.GameDetails} element={<GameDetails />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
