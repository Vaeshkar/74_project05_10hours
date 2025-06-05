/**
 * ProgressActions component for displaying progress controls
 *
 * @param {*} { count, target, onIncrement, onDecrement } 
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
        className="px-4 py-2 text-black bg-white border border-black rounded-full hover:bg-black hover:text-white disabled:opacity-50 transition-colors"
        disabled={count <= 0}
      >
        −
      </button>

      <button
        onClick={() => {
          console.log('Increment clicked, count:', count);
          onIncrement();
        }}
        className="px-4 py-2 text-black bg-white border border-black rounded-full hover:bg-black hover:text-white disabled:opacity-50 transition-colors"
        disabled={count >= target}
      >
        ＋
      </button>
    </div>
  );
};

export default ProgressActions;