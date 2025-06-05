import ProgressActions from './ProgressActions';
import noProgressIcon from '../assets/icons/icon_no_progress.svg';
import inProgressIcon from '../assets/icons/icon_in_progress.svg';
import okProgressIcon from '../assets/icons/icon_ok_progress.svg';

/**
 * HabitListItem component displays a single habit item.
 *
 * @param {*} { habit, onIncrement, onDecrement } 
 * @return 
 */

const HabitListItem = ({ habit, onIncrement, onDecrement }) => {

    function getIconForProgress(habit) {
        if (habit.count === 0) return noProgressIcon;
        if (habit.count < habit.target) return inProgressIcon;
        return okProgressIcon;
    }

  return (
    <li className="text-black bg-yellow-300 border-l-4 border-yellow-500 p-4 rounded-xl shadow-md relative hover:shadow-lg transition-shadow">
      <div className="absolute -top-5 -left-4 w-20 h-20 z-10 -rotate-10">
        <img
          src={getIconForProgress(habit)}
          alt="Habit status"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex justify-between items-center pl-20">
        <div className=''>
          <h3 className="font-bold text-xl">{habit.name}</h3>
          <p className="font-bold opacity-50">Progress: {habit.count} / {habit.target}</p>
        </div>
        <ProgressActions
          habitId={habit.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </li>
  );
};

export default HabitListItem;
