export const WinMessage = ({ moves }) => {
  return (
    <div className='win-message'>
      <h2>Congratulations! You Won!</h2>
      <p>You've matched {moves} the cards.</p>
    </div>
  );
}