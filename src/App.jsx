import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import Header from './components/Header'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import TotalProgressBar from './components/TotalProgressBar';
import Footer from './components/Footer';

// Import necessary styles and components
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  // State to manage habits
  // Initialize habits from localStorage or return an empty array
  const [habits, setHabits] = useState(() => {
    // Initialize habits from localStorage or return an empty array
    const storedHabits = localStorage.getItem('habits');
    return storedHabits ? JSON.parse(storedHabits) : [];
  });

  useEffect(() => {
    // Save habits to localStorage whenever they change
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  // Functions to increment and decrement habit counts
  const incrementHabit = (id) => {
    setHabits(prev =>
      prev.map(h => h.id === id ? { ...h, count: Math.min(h.count + 1, h.target) } : h)
    );
  };

  // Function to decrement habit counts, ensuring it doesn't go below 0
  const decrementHabit = (id) => {
    setHabits(prev =>
      prev.map(h => h.id === id ? { ...h, count: Math.max(h.count - 1, 0) } : h)
    );
  }

  // Function to handle habit deletion
  const handleDelete = (id) => {
  setHabits((prev) => prev.filter(habit => habit.id !== id));
  };
  
  // Render the main application layout
  // Includes the header, habit form, and habit list components
  // Also includes the ToastContainer for notifications
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 pb-8">
        <h2 className="text-2xl font-bold mb-4">Process Tracking</h2>
        <TotalProgressBar habits={habits} setHabits={setHabits} />
        <h2 className="text-xl font-semibold mb-2">Add a New Habit</h2>
        <HabitForm habits={habits} setHabits={setHabits} />
        <h2 className="text-xl font-semibold mt-6 mb-2">Your Habits</h2>
        <HabitList habits={habits} onIncrement={incrementHabit} onDecrement={decrementHabit} onDelete={handleDelete} />
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
}
  
// Export the App component as the default export
export default App;
