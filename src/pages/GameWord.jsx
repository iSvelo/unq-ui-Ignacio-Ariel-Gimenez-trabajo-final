import { useState } from "react"
import Info from "../components/Info/Info"
import Game from "../components/Game/Game"
import Score from "../components/Score/Score"
import Timer from "../components/Timer/Timer"
import { calculateScore } from "../utils/gameRules";
import { useNavigate } from "react-router"
import "../styles/gameWord.css"

const GameWord = () =>{
    const [chain, setChain] = useState([]);
    const score = calculateScore(chain);
    const navigate = useNavigate();
    
    return(
        <div className="GameWord">
            <div className="GameWord--Header">
                <h1>PALABRAS ENCADENADAS </h1>
                <Timer key={chain.length} active={chain.length > 0} onTimeUp={() => navigate("/gameWord-Over", { state: { chain, score } })} />
            </div>
            <Game chain={chain} setChain={setChain}/>
            <Score score={score}/>

        </div>
    )
    //            
     //       
    //                    <Info />
}

export default GameWord