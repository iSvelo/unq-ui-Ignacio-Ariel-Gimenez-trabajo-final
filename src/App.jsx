import { BrowserRouter, Route, Routes } from "react-router";
import GameWord from "./pages/GameWord";
import GameOver from "./pages/GameOver";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameWord/>} />
        <Route path="/GameWord-Over" element={<GameOver />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
