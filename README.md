# API and some dev. decisions explained

- API which i used to realize this news app was [https://newsapi.org/](https://newsapi.org/).

- In this app we have feature of bookmarking / unbookmarking articles on button click. Then if the bookmark button is clicked we trigger function and event to store our article inside of localStorage of our browser (using useEffect and useState). On every new change of the bookmarked articles we need to get data from the localStorage and after that we can store it again with a new values (if we don't do this then our local storage will overwrite itself on every new entry (state change)). With that i also used addEventListener on storage (we created our own event to listen the local storage changes) that we can see our changes on our homepage under "Favourites" in the same time when we click bookmark button. Of course, that this is not the only way to store data. We could use state management system like Redux or we can use React Context but I think that would be an overkill. Except localStorage we have cookies and sessionStorage to do that.

- For mobile UI responsive design (disappearing / appearing of components / div's) I used useState type of boolean in App.tsx component because we needed to forward it to the other children component's for conditional rendering. When App component mounts it trigger's an useEffect which add's event listener "resize" on our window and we update the state depend on that event. If the size of the screen is smaller (in our case) than some value , it will be true and it would do some conditional rendering.

- Except that state we have one more state to show or hide menu if we are on mobile screen. When we are clicking menu button then it will show us all filters that are searchable. After we click one of the filter we will be re-routed to the category page, but you need to close menu with close button and after that you will see all articles from that category.

If you have any question about this project feel free to contact me.

---

# DEFAULT README TEXT DOWN BELOW

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
