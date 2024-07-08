import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/game-details/GameDetails";
import Logout from "./components/Logout/Logout";
import GameEdit from "./components/game-edit/GameEdit";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div id="box">
          <Header />

          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.Games} element={<GameList />} />
            <Route path={Path.GamesCreate} element={<GameCreate />} />
            <Route path={Path.Login} element={<Login />} />
            <Route path={Path.Register} element={<Register />} />
            <Route path={Path.GameDetails} element={<GameDetails />} />
            <Route path={Path.GameEdit} element={<GameEdit />} />
            <Route path={Path.Logout} element={<Logout />} />
          </Routes>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
