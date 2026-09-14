# DevStack

DevStack is a responsive technology stack builder for developers. Browse popular frontend, backend, database, language, styling, and DevOps tools, then add the technologies you want to use to your personal stack.

## Technologies Used

- React 
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON data loaded with the Fetch API

## Features

1. **Technology cards**
   Browse technology cards with logos, descriptions, categories, difficulty levels, ratings, and badges.

2. **Interactive stack builder**
   Add technologies to “Your Stack,” remove individual items, or clear the entire stack. Selected cards become disabled to prevent duplicates.

3. **Responsive interface**
   Use DevStack on mobile, tablet, or desktop with a responsive navbar, technology grid, stack panel, and footer.


## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like markup inside JavaScript or TypeScript. React uses it to describe what the user interface should look like in a clear and readable way.

### 2. What is the difference between props and state?

Props are values passed from a parent component to a child component. State is data managed inside a component that can change and cause the UI to update.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data in a function component. In `Technologies.tsx`, it stores the loaded technologies, loading status, errors, and the IDs of technologies selected for the stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after a component renders. It loads the local `technologies.json` file when the Technologies component starts, then updates the component with the fetched data.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each list item. This lets React update only the items that changed and prevents rendering problems.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In `Technologies.tsx`, the app shows “Your stack is empty” when no technology has been selected; otherwise, it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data through props, for example `<Card technology={item} />`. A child can send information back by calling a callback function that the parent passes as a prop, such as `onAdd(technology.id)`.
