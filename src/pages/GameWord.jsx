import { useState } from "react"
import Info from "../components/Info/Info"
import Game from "../components/Game/Game"
import Score from "../components/Score/Score"
import Timer from "../components/Timer/Timer"


const GameWord = () =>{
    const [chain, setChain] = useState([]);

    return(
        <div className="GameWord">
            <h1>PALABRAS ENCADENADAS </h1>
            <Timer />
            <Game chain={chain} setChain={setChain}/>
            <Score />

        </div>
    )
    //            
     //       
    //                    <Info />
}

export default GameWord