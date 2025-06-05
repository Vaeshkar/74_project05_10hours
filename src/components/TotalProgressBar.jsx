const TotalProgressBar = ({ habits, setHabits }) => {
  const total = habits.reduce((acc, habit) => acc + habit.count, 0);
  const target = habits.reduce((acc, habit) => acc + habit.target, 0);
  const progress = (total / target) * 100;

  const handleReset = () => {
    const updated = habits.map( h => ({ ...h, count: 0 }));
    setHabits(updated);
  };

  const handleCompleteAll = () => {
    const updated = habits.map(h => ({ ...h, count: h.target }));
    setHabits(updated);
  };

  const handleClearAll = () => {
    setHabits([]);
  };

  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold">Total Progress</h3>
      <div className="relative h-4 bg-gray-200 rounded">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600">
        {total} / {target} completed
      </p>
      <div className="flex justify-center gap-4 mb-4">
        <button onClick={handleReset} className="bg-black text-white px-4 py-2 rounded-full mt-2">Reset Progress</button>
        <button onClick={handleCompleteAll} className="bg-black text-white px-4 py-2 rounded-full mt-2">Complete All</button>
        <button onClick={handleClearAll} className="bg-black text-white px-4 py-2 rounded-full mt-2">Clear All</button>
      </div>
    </div>
  );
};

export default TotalProgressBar;
