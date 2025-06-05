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

const HabitListItem = ({ habit, onIncrement, onDecrement, onDelete }) => {

    function getIconForProgress(habit) {
        if (habit.count === 0) return noProgressIcon;
        if (habit.count < habit.target) return inProgressIcon;
        return okProgressIcon;
    }

  return (
    <li className="group text-black bg-yellow-300 border-l-4 border-yellow-500 p-4 rounded-xl shadow-md relative hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="absolute -top-10 -left-8 w-20 h-20 z-10 -rotate-10">
          <img
            src={getIconForProgress(habit)}
            alt="Habit status"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex justify-between items-center pl-20">
          <div>
            <h3 className="font-bold text-xl">{habit.name}</h3>
            <p className="font-bold opacity-50">Progress: {habit.count} / {habit.target}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(habit.id);
            }}
            className="+ text-lg font-bold absolute -right-11 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black text-white opacity-0 cursor-pointer group-hover:-right-12 group-hover:opacity-100 transition-all duration-300"
          >
            X
          </button>
          <ProgressActions
            habitId={habit.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        </div>
      </div>
    </li>
  );
};

export default HabitListItem;
