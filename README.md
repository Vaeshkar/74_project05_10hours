
# 🛠️ React Mini Project – Habit Tracker

A simple, responsive Habit Tracker built with React + Vite. Users can create custom habits, track daily progress, and visualize their completion—all with persistent local storage.

## live demo: [Habit Tracker Demo](https://wbshabitracker.netlify.app/)

## 🚀 Project Overview

This project tests fundamental React skills like:

- Components & Props
- `useState` and `useEffect`
- Conditional Rendering
- Local Storage Integration
- Responsive Design

## 📌 Features

| ID     | Requirement                     | Description                                                                 |
|--------|----------------------------------|-----------------------------------------------------------------------------|
| FR001  | Public GitHub Repository         | All code is stored in a single public GitHub repo                           |
| FR002  | Incremental Development with PRs | All changes merged into main via Pull Requests                             |
| FR003  | React App Setup with Vite        | Project bootstrapped using Vite                                             |
| FR004  | Habit Creation                   | Users can create habits and set a frequency goal                            |
| FR005  | Habit Progress Counter           | Increment/decrement daily counters for each habit                           |
| FR006  | Total Progress Tracking          | Shows summary of completed vs total habits                                  |
| FR007  | Completion Tracking              | Habits visually marked complete once daily goal is reached                  |
| FR008  | State Management with Hooks      | All interactivity managed using `useState` and `useEffect`                  |
| FR009  | Local Storage Integration        | Habits persist via browser’s local storage                                  |
| FR010  | Responsive Design                | Looks great on desktop and mobile devices                                   |

## 🗂 File Structure

```
habit-tracker/
├── src/
│   ├── components/
│   │   ├── HabitForm.jsx
│   │   ├── HabitList.jsx
│   │   ├── HabitListItem.jsx
│   │   ├── Header.jsx
│   │   └── ProgressActions.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
```

## ⏱️ Duration

- Full Time: 2 Days  
- Part Time: 5 Days  
- Presentation: TBD by instructor

## 💡 Tips for Success

- Hold daily stand-ups to track blockers and share progress
- Keep code and components modular and tidy
- Don’t hesitate to ask for help if stuck for more than 30 minutes
- Focus on clean UI and persistent functionality

---
This project is an opportunity to strengthen your React fundamentals while building something useful and real. Happy coding!

---

## 📋 Changelog

### v2.6.0

- Changed the Total Progress bar to display the total habits

### v2.5.0

- mobile delete button solution `useLongPress`
- added `useLongPress` hook for better mobile experience
- small UX explanation for the delete button

### v2.4.0

- finishing up the styling of the habit tracker
- added bg svg image to the background
- made the progress bar change color based on the completion percentage
- added footer with links to the GitHub repo and live demo
- added delete button to remove habits
- Made interesting delete button positioning and styling

### v2.3.0

- styling the list items to be more visually appealing
- added 3 new icons to the list items

### v2.1.0

- Refactored the process actions to the `ProgressActions` component

### v2.0.0

- Refactored components for better structure (`HabitForm`, `HabitList`, `HabitListItem`, `Header`)
- Added Toastify for user feedback when goals are reached
- Local Storage now loads habits correctly on refresh
- New favicon and updated page title
- UI improvements for input alignment and habit display

### v1.0.0

- Deployed initial version to Netlify
- Initial release with basic App setup
- Printing "Hello World!" on the screen
- Basic Vite configuration
- Initial commit with React and Vite setup
- Added README with project overview and requirements
- Basic CSS styles for layout