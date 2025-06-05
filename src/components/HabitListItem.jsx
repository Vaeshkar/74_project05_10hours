import { useState, useRef } from 'react';
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

    // Function to determine the icon based on habit progress
    function getIconForProgress(habit) {
        if (habit.count === 0) return noProgressIcon;
        if (habit.count < habit.target) return inProgressIcon;
        return okProgressIcon;
    }

    // State to manage the visibility of the delete button on long press
    const [showDelete, setShowDelete] = useState(false);
    const longPressTimer = useRef(null);

    // Function to start the long press
    const startLongPress = () => {
    longPressTimer.current = setTimeout(() => {
        setShowDelete(true);
    }, 600); // long press duration
    };

    // Function to cancel the long press
    const cancelLongPress = () => {
        clearTimeout(longPressTimer.current);
    };

  return (
    <li
      className="group text-black bg-yellow-300 border-l-4 border-yellow-500 p-4 rounded-xl shadow-md relative hover:shadow-lg transition-shadow"
      onMouseDown={startLongPress}
      onMouseUp={cancelLongPress}
      onMouseLeave={cancelLongPress}
      onTouchStart={startLongPress}
      onTouchEnd={cancelLongPress}
    >
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
            <p className="text-xs opacity-50 sm:hidden">Long press to <span className='font-bold'>delete</span></p>
          </div>
          <ProgressActions
            habitId={habit.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(habit.id);
            }}
            className={`absolute -right-11 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black text-white text-lg font-bold cursor-pointer transition-all duration-300
            opacity-0 group-hover:opacity-100
            ${showDelete ? 'opacity-100 block' : 'md:block'}`}
            title="Long press to delete on mobile"
          >
            X
          </button>
        </div>
      </div>
    </li>
  );
};

export default HabitListItem;
