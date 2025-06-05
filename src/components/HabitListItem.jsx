/**
 * HabitListItem component displays a single habit item.
 *
 * @param {*} { habit } 
 * @return 
 */

const HabitListItem = ({ habit }) => {
  return (
    <li className="flex justify-between items-center border-b py-2">
      <span className="font-medium">{habit.name}</span>
      <span className="text-sm text-gray-500">
        {habit.count} / {habit.goal}
      </span>
    </li>
  );
};

export default HabitListItem;
