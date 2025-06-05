import HabitListItem from './HabitListItem';

/**
 * HabitList component for displaying a list of habits
 *
 * @param {*} { habits, onIncrement, onDecrement, onDelete } 
 * @return 
 */

const HabitList = ({ habits, onIncrement, onDecrement, onDelete }) => {
  return (
    <ul className="mt-4 space-y-4">
      {habits.map((habit) => (
        <HabitListItem
          key={habit.id}
          habit={habit}
          onIncrement={() => onIncrement(habit.id)}
          onDecrement={() => onDecrement(habit.id)}
          onDelete={() => onDelete(habit.id)}
        />
      ))}
    </ul>
  );
};

export default HabitList;