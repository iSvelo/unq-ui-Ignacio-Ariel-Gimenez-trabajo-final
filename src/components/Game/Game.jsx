import { useState } from "react";
import { ERRORS, isAlreadyUsed, respectsChain  } from "../../utils/gameRules"
import { validateWord } from "../../services/wordService";
import "./Game.css"

const Game = ({ chain, setChain }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const word = input.trim().toLowerCase();
        if (!word) return;

        if (!respectsChain(word, chain)) {
            setError(ERRORS.BAD_CHAIN);
            return;
        }

        if (isAlreadyUsed(word, chain)) {
            setError(ERRORS.ALREADY_USED);
            return;
        }

        const exists = await validateWord(word);

        if (!exists) {
            setError(ERRORS.NOT_FOUND);
            return;
        }

        setChain([...chain, word]);
        setInput("");
        setError(null);
    };

    const lastWord = chain[chain.length - 1];

    const placeholder = chain.length === 0
        ? "Escribí una palabra para empezar"
        : `Una palabra que empiece con "${lastWord.slice(-1).toUpperCase()}"`;


  return(
    <div className="game">
        <p className="game--chain">{chain.join(" → ")}</p>
        <form onSubmit={handleSubmit} >
            <input className="game--input" type="text" placeholder={placeholder} value={input} onChange={(e) => setInput(e.target.value)}/>
            <button className="game--button" type="submit" >Enter</button>
        </form>
        {error && <p className="game--error">{error}</p>}
    </div>
  )
};
export default Game;