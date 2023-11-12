const EndGame = ({ playAgain }) => {
  return (
    <div className="end-game">
      <h1>You Won</h1>
      <button onClick={playAgain}>PLAY AGAIN</button>
    </div>
  );
};

export default EndGame;
