/**
 * ProgressActions component for displaying progress controls
 *
 * @param {*} { count, target, onIncrement, onDecrement, onDelete } 
 * @return 
 */
const ProgressActions = ({ count, target, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => {
          console.log('Decrement clicked, count:', count);
          onDecrement();
        }}
        className="btn"
        disabled={count <= 0}
      >
        −
      </button>

      <button
        onClick={() => {
          console.log('Increment clicked, count:', count);
          onIncrement();
        }}
        className="btn"
        disabled={count >= target}
      >
        ＋
      </button>
    </div>
  );
};

export default ProgressActions;