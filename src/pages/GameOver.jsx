import { useLocation, Navigate } from "react-router";
import "../styles/gameOver.css"

const GameOver = () => {
    const { state } = useLocation();

    if (!state) return <Navigate to="/" />;

    return(
        <div className="gameOver">
            <h1>FIN DEL JUEGO</h1>
            <div className="GameOver--stats">
                <div className="GameOver--stat">
                    <span className="GameOver--number">{state.score}</span>
                    <span className="GameOver--label">PUNTAJE FINAL</span>
                </div>
                <div className="GameOver--stat">
                    <span className="GameOver--number">{state.chain.length}</span>
                    <span className="GameOver--label">CANTIDAD PALABRAS</span>
                </div>
            </div>
            <h2 className="GameOver--subtitle">PALABRAS USADAS</h2>
            <ul className="GameOver--chain">
                {state.chain.map((word) => (
                    <li key={word} className="GameOver--word">{word}</li>
                ))}
            </ul>
        </div>
    )
}

export default GameOver