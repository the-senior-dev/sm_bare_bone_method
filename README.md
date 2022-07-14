# Action Item: The Bare Bone Method

In this Action Item you will: 
1. Use the `Bare Bone Method` to 10X your development speed in the frontend
2. Practice `state architecture` in the front-end by working with local and global state
3. Write `component` and `end-2end` tests to ensure quality

![bare-bone-method](examples/the_bare_bone_method.png)

We provide the starting code for this app so you can jump straight into the action. The following three challenges are based on **REAL interview tasks**:

## Challenges:
1. [COMPETENT] Extend the `MainPage` to contain a view of the `Now Playing` movies
2. [COMPETENT] Add a `Search` and a `Pagination` to the MainPage
3. [PROFICIENT] Add a global language switch to the page
4. [EXPERT] Extend the `MoviePage` to show the movie cast and other movies each actor also did


### Getting Started
1. You will need an API Key to make the requests to the API. You can get one [here](https://developers.themoviedb.org/3/getting-started/introduction)
2. Check the `package.json` to see the scripts available. Run `npm start` to run the app.

----

### 1. [COMPETENT] Extend the `MainPage` to contain a view of the `Upcoming` movies
![](examples/now-playing-low-fidelity.png)

#### Acceptance Criteria
1. The `MainPage` should display a section with the upcoming movies
2. The style should be the same as the [TrendingNow](src/components/TrendingNow.tsx) component - you can just copy that one.

Use the bare bone method to structure your component and data flow before styling. Check out how we do that here. [VIDEO WITH BARE BONE HERE]

###### Hint: you might need to extend the [movieApiClient] and add a method to fetch a list of the movies upcoming. Check out [the endpoint documentation here](https://developers.themoviedb.org/3/movies/get-upcoming).

###### Hint: you can reuse the same component if you "lift state", extract the business logic and isolate the __rendering__ into a stateless component.

### Solution: Task 1
1. Task 1 - Solution Code
2. Task 1 - Video Solution Here

----


----

## Wrapping up

1. Set up a linter
2. Setup Git Hooks with Husky
3. Feel free to take the exercise further and experiment yourself with the setup

### Getting Help

If you have issues with the Action Item, you can ask for help in the [Community](https://community.theseniordev.com/) or in the [Weekly Q&A’s](https://calendar.google.com/calendar/u/0?cid=Y19kbGVoajU1Z2prNXZmYmdoYmxtdDRvN3JyNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t).

### Made with :orange_heart: in Berlin by @TheSeniorDev
