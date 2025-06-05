import ProgressActions from './ProgressActions';

/**
 * HabitListItem component displays a single habit item.
 *
 * @param {*} { habit, onIncrement, onDecrement } 
 * @return 
 */

const HabitListItem = ({ habit, onIncrement, onDecrement }) => {
  return (
    <li className="border p-4 rounded shadow flex justify-between items-center">
      <div>
        <h3 className="font-bold">{habit.name}</h3>
        <p className="text-sm text-gray-600">Progress: {habit.count} / {habit.target}</p>
      </div>
      <ProgressActions
        habitId={habit.id}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </li>
  );
};

export default HabitListItem;
