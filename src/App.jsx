import { BrowserRouter, Route, Routes } from "react-router";
import GameWord from "./pages/GameWord";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameWord/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
