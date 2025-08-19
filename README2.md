/ Task: Create a React Example Demonstrating useMemo and Expensive Computation

// In this task, you will build a simple React application that demonstrates the use of the useMemo hook to optimize performance when dealing with expensive computations. Follow the steps below:

// 1. **Set up State:**
//    - Create a functional component called App.
//    - Use the useState hook to create two pieces of state:
//      - number: a number input by the user (default value: 0).
//      - dark: a boolean to toggle between dark and light themes (default value: false).

// 2. **Expensive Computation:**
//    - Write a function called slowFunction that takes a number and simulates a slow calculation (for example, by running a long loop).
//    - The function should return double the input number.

// 3. **Optimize with useMemo:**
//    - Use the useMemo hook to memoize the result of slowFunction(number). This ensures the expensive calculation only runs when number changes, not when other state (like dark) changes.

// 4. **Theme Styles:**
//    - Create a themeStyles object that sets the background and text color based on the dark state.

// 5. **Render the UI:**
//    - Render an input field for the user to enter a number. When the value changes, update the number state.
//    - Render a button to toggle the theme between dark and light.
//    - Display the result of the expensive calculation (doubleNumber) in a styled div using themeStyles.