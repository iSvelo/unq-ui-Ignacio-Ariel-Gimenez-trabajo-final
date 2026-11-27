import { useLocation, Navigate } from "react-router";


const GameOver = () => {
    const { state } = useLocation();

    if (!state) return <Navigate to="/" />;

    return(
        <div>
            <p>
                FIN DEL JUEGO
            </p>
            <p>Cantidad palabras encadenadas: {state.chain.length}</p>
            <p>Palabras usadas: {state.chain.join(" → ")}</p>
            <p>Puntaje final: {state.score}</p>  
        </div>
    )
}

export default GameOver