const Footer = () => {
  return (
    <footer className="bg-secondary text-black py-4 rounded-t-2xl shadow-md mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 WBS Coding School | All rights reserved.</p>
        <p>
          GitHub page and Live Demo:{' '}
          <a href="https://github.com/Vaeshkar/74_project05_10hours" className="hover:text-bg-secondary transition-colors duration-300 hover:underline">GitHub</a>,{' '}
          <a href="https://wbshabitracker.netlify.app/" className="hover:text-bg-secondary transition-colors duration-300 hover:underline">Live Demo</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer; 