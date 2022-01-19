# Basic Habit Tracking App

Here's an image of the app on 1/17/2022

![Habit Tracker App](https://github.com/pfelto/HabitTracker/blob/main/public/app01172022.PNG)

Move along.

<details>
<summary> Lessons Learned for Project 1 of #100DaysOfCode</summary>

1. Might be best to follow development process that Sumer Buna laid out in his PluralSight class starting out. I think it is very helpful to get the styles and html in place first and then work from there separating components, thinking about state, UI logic, APP Logic, creating/cleaning side effects, extracting logic, etc.

2. When you are loading something from an API it makes more sense to use useReducer over useState as you will most likely be setting 2 or 3 things at a time (status, data and error)

3. Need to spend more time on how/what is needed for state and what will go inside custom hooks. This one I basically just shifted all the computational code out of the react component into a custom react hook that I cannot use for anything else

   - Would be nice to be able to reuse a custom Hook for getting data from an API as I will be doing this a lot in future projects (pagination of rick and morty API, fetch and cache API results)

4. CSS styling is hard to do well! I think I should pick using inline styles mostly or classic CSS stylesheets. This was sort of a mixed bag.

5. Benefits of sitting down and coding 1hr+ a day is huge. I got to put a lot of programming skills I have been learning about in practice and work on something over multiple days and hours let me think of better ways to do things, new features to add and much more.

6. Prop drilling can become a real pain. Look into using composition or context more.

</details>

<details>
<summary>Getting Started with Create React App</summary>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>
