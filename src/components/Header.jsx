/**
 * Header component for the Habit Tracker App
 *
 * @return 
 */
const Header = () => {
  return (
    <header className="bg-secondary text-black p-4 shadow-md text-center rounded-b-3xl">
      <h1 className="text-5xl font-bold mt-4">Habit Tracker App</h1>
        <p className="text-lg mt-4 mb-1">Track your habits and stay productive!</p>
    </header>
  );
}

export default Header;
