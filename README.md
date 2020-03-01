# Multiplayer Conway's Game of Life ReactJS client

This is a [ReactJS application](https://conway.michaelchoy.dev) written in Typescript that implements a frontend
SocketIO client for the associated SocketIO server. A Python Flask implementation of a compliant server is hosted [here](https://github.com/bridgelancer/conway-game-of-life-backend). The rules of the game is also delineated in that backend repository README as well.

This app currently only supports *desktop* screens with mouse inputs. The design of this app takes inspiration from [lifecompetes.com](http://lifecompetes.com). 

The grid itself is implemented using React-Konva, which is a library that renders a <canvas> element for handling user input and display of the synchoronized worldview. Semantic-UI-React is used for common UI components of the page.

The app would not update if it is disconnected from the server. User could still be able to place temporary changes to the board but these changes would not have any effect in future generation.

This app is currently hosted on Heroku.

## Quick start
A functional [node](https://nodejs.org/en/) and npm installation is needed for installing dependency. A working installation of `npm` comes with `node`. The current LTS version of `node v12.16.1` would be recommended for deveopment.

To install dependences, run 
### npm install 

A development server could be fired by running

### npm run dev

This command would fire off a React development server on `http://localhost:3000/`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Serves the app in Express server. <br />
Listens to the `PORT` shell variable, or 8080 by default.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deploy to Heroku
Various strategies could be used to deploy this codebase onto your own Heroku account including using the HerokuCLI and Github continous-delivery approaches.

Installation guide of HerokuCLI on various systems could be found on their [Dev Center Site](https://devcenter.heroku.com/articles/heroku-cli).

After [logging in](https://devcenter.heroku.com/articles/authentication) to your Heroku account via HerokuCLI, create a new Heroku app for this project on your account by running

`heroku create`

### Environment variable setup
As per documentation, environmental variables of a Heroku web dyno instance could be set via HerokuCLI or via the web application.

In the git repository, run 
`heroku config:set REACT_APP_HOST_DOMAIN=https://conway-game-of-life-backend.herokuapp.com/test`
to set up the API host.

### Manual deploy by HerokuCLI
A remote of `heroku` would be setup to this newly created Heroku project for deployment. To deploy, simply push a master branch to the heroku remote with
`git push heroku master`

### Github automatic deploy

Heroku could pull code from Github whenever the master branch of the repository is pushed after receiving OAuth authorization and proper configuration. This could be set up in the `Deploy` tab of the Heroku Dashboard app. The detailed documentation could be found [here](https://devcenter.heroku.com/articles/github-integration). 

In this repository, the code base would be deployed to heroku immediately after the master branch of this repository is pushed.

## Design choices

ReactJS is used for its easier handling of states within components. This is particular useful for states that is inherent to the selection of cells and could speed up development process. Extra mouseover and dirty board function is implemented in place of original proposal of click submission for better UX experience.

A canva element is used to represent the current state of the board. This allows better animation effect as it can leverage GPU acceleration when available. The Web Canvas API also allow finer control of UI effects if it is warranted.

## Tradeoffs and Todos

After some consideration, I decided not to support mobile version due to time
constraint. A must-do is to support web version of the canvas and dynamic grid
sizing for accessibility reason.

The performance of the React app, on top of Konva, is slighlty below my original estiamtion. Considerable lags could be observed when mouseovering individual cells on the canvas. Performance enhancement regarding the rendering of the canvas, including caching of images and utilization of OffscreenCanvas, might be needed.

Similar to that in the backend, the user inputs are sent to the server with the whole board. This is inefficient as only a tiny proportion of cells are updated each time when a user submits the changes. The update of board and the respective rendering should take individual cells as unit instead of whole board in order to support any bigger board in the future.
