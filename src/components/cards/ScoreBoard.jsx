const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <div className="score-board">
      <p style={{ color: 'white', backgroundColor: 'var(--color-blue)' }}>
        Current score : {currentScore}
      </p>
      <p style={{ backgroundColor: 'var(--color-yellow)' }}>
        Best score : {bestScore}
      </p>
    </div>
  );
};

export default ScoreBoard;
