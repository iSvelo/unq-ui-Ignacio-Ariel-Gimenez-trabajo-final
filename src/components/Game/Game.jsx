import { useState } from "react";
import { ERRORS, isAlreadyUsed, respectsChain  } from "../../utils/gameRules"
import { validateWord } from "../../services/wordService";

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


  return(
    <div>
        <p>{chain.join(" → ")}</p>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Escribí una palabra para empezar" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button type="submit">Enviar</button>
        </form>
        {error && <p>{error}</p>}
    </div>
  )
};
export default Game;