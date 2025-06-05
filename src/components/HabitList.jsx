/**
 * HabitList component for displaying a list of habits
 *
 * @param {*} { habits, onIncrement, onDecrement } 
 * @return 
 */

const HabitList = ({ habits, onIncrement, onDecrement }) => {
  return (
    <ul className="mt-4 space-y-4">
      {habits.map((habit) => (
        <li key={habit.id} className="border p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">{habit.name}</h3>
              <p className="text-sm text-gray-600">Progress: {habit.count} / {habit.target}</p>
            </div>
            <div className="flex space-x-2">
              <button
                className="px-2 py-1 bg-green-500 text-white rounded"
                onClick={() => onIncrement(habit.id)}
              >
                +
              </button>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => onDecrement(habit.id)}
              >
                −
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HabitList;