/**
 * ProgressActions component for displaying progress controls
 *
 * @param {*} { count, target, onIncrement, onDecrement } 
 * @return 
 */
const ProgressActions = ({ count, target, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => {
          console.log('Decrement clicked, count:', count);
          onDecrement();
        }}
        className="px-3 py-1 bg-red-500 text-white rounded disabled:opacity-50"
        disabled={count <= 0}
      >
        −
      </button>

      <span className="text-lg font-semibold">
        {count} / {target}
      </span>

      <button
        onClick={() => {
          console.log('Increment clicked, count:', count);
          onIncrement();
        }}
        className="px-3 py-1 bg-green-500 text-white rounded disabled:opacity-50"
        disabled={count >= target}
      >
        ＋
      </button>
    </div>
  );
};

export default ProgressActions;