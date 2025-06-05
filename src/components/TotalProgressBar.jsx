const TotalProgressBar = ({ habits, setHabits }) => {
  const total = habits.reduce((acc, habit) => acc + habit.count, 0);
  const target = habits.reduce((acc, habit) => acc + habit.target, 0);
  const progress = target > 0 ? (total / target) * 100 : 0;

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

  const getProgressColor = (progress) => {
  if (progress < 33) return '#fdd603'; 
  if (progress < 66) return '#ffabd6'; 
  return '#01b567'; 
};

  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold">Total Progress</h3>
      <div className="relative h-10 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div
          className="absolute top-0 left-0 h-full bg-secondary rounded-full transition-colors duration-500 shadow-inner"
          style={{ width: `${progress}%`, backgroundColor: getProgressColor(progress) }}
        ></div>
      </div>
      <p className="text-sm text-secondary mt-2">
        {total} / {target} completed
      </p>
      <div className="flex justify-center gap-4 my-4">
        <button onClick={handleReset} className="btn">Reset Progress</button>
        <button onClick={handleCompleteAll} className="btn">Complete All</button>
        <button onClick={handleClearAll} className="btn">Clear All</button>
      </div>
    </div>
  );
};

export default TotalProgressBar;
