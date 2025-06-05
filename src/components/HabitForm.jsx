import { toast } from 'react-toastify';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

/**
 * HabitForm component for adding new habits
 *
 * @param {*} { setHabits } 
 * @return 
 */

const HabitForm = ({ setHabits }) => {
  // State to manage the form inputs  
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || isNaN(parseInt(target))) return; // Validate inputs

    const habit = {
      id: Date.now(),
      name: name,
      target: Math.max(parseInt(target), 1), // Ensure target is at least 1
      count: 0,
    };

    setHabits((prev) => [...prev, habit]); // Update habits state
    setName(''); // Clear name input
    setTarget(''); // Clear target input
    toast.success('Habit added!'); // Show success notification
    
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex">
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a new habit"
          className="border p-2 rounded flex-1"
        /> {/* // Input for habit name */}
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Target"
          className="border p-2 rounded w-1/5 ml-2"
        /> {/* // Input for habit target */}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;