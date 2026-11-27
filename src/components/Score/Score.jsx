import "./Score.css"

const Score = ({score}) => {
  return (
    <div className="score">
      <span className="score--number">
        {score}
      </span>
      <span className="score--label">
        Puntaje
      </span>
    </div>
  )
};
export default Score;