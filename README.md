# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Before running anything else please run `yarn install`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Upcoming features
- Remove the api call from App.tsx and move it to a dedicated service
- A highest failing list showing which turbines have the most criticals and warnings in descending order
- Visual rework: the current grid is just Rows and Cols with bootstraps Card component. These take up much more room than they need to to convey the information we have and leave too much padding between cards. An idea I have is a tight grid of circles with the turbine id in them and their background color expressing the status and no other text. This would allow showing much greater numbers of turbines in a usable way. The exact count of warnings and criticals could still be shown on hover/on click.
- Stop showing healthy turbines by default. The main goal of this dashboard is to tell operators which turbines need attention. I expect the vast majority of the turbines will be healthy most of the time and we're wasting a lot of visual space on irrelevant information.
- Display a fleet health score (85% healthy turbines for example)
- The API currently doesn't have any timestamps for the failures, if we could get those added we could calculate reliability over time for each turbine based on how often it has a warning/critical.
- Create views for the different statistics and add Routing and a navbar to reach them
- A Dockerfile for easier deployment
- Remove the create-react-app files that aren't relevant to us