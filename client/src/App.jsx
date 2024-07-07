import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/game-details/GameDetails";
import { useState } from "react";
import AuthContext from "./contexts/authContext";

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <AuthContext.Provider value={loginSubmitHandler}>
      <div id="box">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/games/create" element={<GameCreate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games/:gameId/details" element={<GameDetails />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
