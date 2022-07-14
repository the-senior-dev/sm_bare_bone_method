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
3. [EXPERT] Add a global language switch to the page


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

### 2. [COMPETENT] Add a `Search` and a `Pagination` to the MainPage

#### Acceptance Criteria
2.1. Add the missing parts and the functionality to the `SearchBar` component
- an input field where the users can type the `Movie` they want to search for
- a button that when pressed will cause a refetch of the movies that matched the search

![search-bar-close-up](examples/search_bar_close_up.png)

2.2. Add a `Pagination` for the list of movies:
- the `pagination` should have a first, next, previous and last `button`
- clicking on the buttons should cause a refetch of the right movie page

![search-bar-pagination](examples/pagination_close_up.png)


Use the bare bone method to structure your component and data flow before styling. Check out how we do that here. [VIDEO WITH BARE BONE HERE]

###### Hint: you might need to extend the [movieApiClient] to fetch a certain page of movie results. Check out [the endpoint documentation here](https://developers.themoviedb.org/3/search/search-movies).

###### Hint: take time to understand where the pagination state should live. You might need to "lift the state" in order to keep your components clean.

### Solution: Task 1
1. Search Bar - Solution Code
2. Search Bar - Solution Video
3. Pagination - Solution Code
4. Pagination - Solution Video

----

### 3. [EXPERT] Add a global language switch to the page
#### Acceptance Criteria
1. In the `Header`, add a dropdown that will change the language of the whole website
2. All the component should switch language when the dropdown is selected, across all pages
3. The language choice should be persisted in `localStorage` 

![language-switch](examples/language-switch.png)

#### Optional Acceptance Criteria:
- the language switch should pickup the browser default language if not configured previously
- the api calls should fetch data in the user preferred language when possible

###### Hint: take time to understand where the state of the localization will live and how you will distribute it to all the component.

###### Hint: although we leave the choice up to you, we recommend a light-weight state management solution like React.Context.

### Solution
1. Code Solution - Language Switch
2. Video Solution - Language Switch

----


## Wrapping up

1. What are some improvement you would propose to the app?
2. Setup Git Hooks with Husky
3. Take the Action Item Assessment

### Getting Help

If you have issues with the Action Item, you can ask for help in the [Community](https://community.theseniordev.com/) or in the [Weekly Q&A’s](https://calendar.google.com/calendar/u/0?cid=Y19kbGVoajU1Z2prNXZmYmdoYmxtdDRvN3JyNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t).


### Extra Resources

1. Low fidelity view of the finished app

![finished-app](examples/complete-low-fidelity.png)



### Made with :orange_heart: in Berlin by @TheSeniorDev
