<<<<<<< HEAD
# Action Item: Build a Movie App with Pagination

This kind of application is a common example of an interview for a React developer aiming at a mid-level/senior position with a focus on UI development. 

**Make sure you set aside at least 3 hours of focused, uninterrupted work and give your best.**

Follow the steps to setup a single page app with `React` and `Typescript` where the users can:

### Functional Requirements:
1. Search for a movie
2. See the results, displayed in multiple pages
3. Change page using the pagination button
4. Check the individual movie details on a separate page

**Use the [OMDB API](http://www.omdbapi.com/) to fetch movies. Make sure you create and account and get an [API key](http://www.omdbapi.com/apikey.aspx).**

### Non-functional requirements:

1. Add unit(component) tests using jest
2. Use `typescript` for code quality

**Example of the final result:**
![main-page](examples/app_example_main_page.png)
![movie-page](examples/app_example_movie_page.png)

----

# Starter code
=======
# Action Item: Build a Movie App with a Pagination component

Follow the steps to setup a single page app with React and Typescript where the users can:

1. Search for a movie
2. See the results, displayed in multiple pages
3. Change page using the pagination button
4. Check the individual movie details
5. Add a movie to favourites -- this will be persisted even if a user closes the page

Non-functional requirements:

1. Add unit(component) tests
2. Use `typescript` for code quality

# Started code
>>>>>>> solution

As starter code we will use the solution to the previous action item. 
Make sure you completed that one before starting the current one.

<<<<<<< HEAD
### Run the app
=======
# Run the app
>>>>>>> solution

1. Install the dependencies:
    ```bash 
    npm install
    ```
2. Run the app:
    ```bash 
    npm start
    ```

<<<<<<< HEAD
### We highly encourage you try to build the app yourself before and only then check the solution steps.

-----

# Step-by-Step Solution

We will follow the Bare Bone method to break down the requirements and build the app. These are the main steps:

#### 1. Build the main component hierarchy
#### 2. Add state and props, and mock data
#### 3. Add functionality and data fetching
#### 4. Style all pages

![movie-page](examples/the_bare_bone_method.png)

------

## 1. Building the Main Component Hierarchy

As requirements specify we will have different pages. The user will be able to switch back and forth. In order to create this kind of behavior without over complicated our Component hierarchy we will user a client router library: `react-router`.


1.1 Add `react-router` and its type package as a dependency:
```bash 
npm install react-router-dom
```
And the type definitions for it:
```bash 
npm i --save-dev @types/react-router-dom
```

1.2 Draw the mental component hierarchy. 

You will have to use your intuition here and apply the SOLID principle to identify the different components.

Our component Structure is the following:


1. Main Page --> *fetch the data, owns the pagination state, passes down props to rest*
    - MovieList --> *render a list of movies*
        - MovieCards
            - MovieImage
            - MovieTitle
            - MovieDescription
    - Pagination --> *render the pages, can change the page state*
        - FirstButton
        - PageNumber
        - LastButton
2. Movie Page
    - MovieContainer --> *fetch the data of a single movie using the id form the url*
        - MovieFullImage
        - MovieLongDescription
    - BackButton


The smaller components(inputs, buttons) where omitted for the sake of simplicity. 

You can use this as guidance to draw your own component tree. Our final result would look like this:

![components-main-page](examples/main_page_component_split.jpg)


For the movie page:

![components-movie-page](examples/movie_page_componet_split.jpg)

----

1.3 Implement the component structure with placeholder data: 

We recommend using the `rfc` shortcut from the [React Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) extension to quickly generate the components.

Use the [example here](https://reactrouter.com/web/example/basic) and [here](https://reactrouter.com/web/example/url-params) to setup the Router for the Movie page. As the API shows, we will use the `imdbId` properly in the url as is unique and we can use it to fetch individual movies.

The basic component structure should take you around 30 min to setup. Ours looks like this:
![components-movie-page](examples/component_hierarchy_implementation.png)

We use [Lore Ipsum](https://www.lipsum.com/) to fill the needed text.

Inside the components we use dummy and placeholder data. In the `Pagination.tsx` for example:
```javascript
import React from 'react'

export default function Pagination() {
    return (
        <div>
            <button>First</button>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <button>Last</button>
        </div>
    )
}
```
The `MovieCard.tsx` looks like this:

```javascript
import React from 'react'
import {
    Link
} from "react-router-dom";

export default function MovieCard() {
    return (
        <Link to="/movie/1">
            <div style={{display: "flex"}}>
                <img height="200" src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"></img>
                <div>
                    Lorem Ipsum is simply dummy ....
                <h4>Action, Adventure</h4>
            </div>
        </Link>
    )
}

```

And our `MovieList.tsx` like this:


```javascript
import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList() {
    return (
        <div>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
        </div>
    )
}
```

The App at this stage should look like this:
![components-movie-page](examples/app_components_step_one.gif)

----

## 2. Add state and props and mock data

2.1 Adding State

Is time to replace the fake data and start think about the logic. In terms of state:

The MainPage component:
- a variable to store the list of movies: movieList
- a variable to store the current page: currentPage
- a variable to store the total page number: pageTotal
- a variable to store the search: searchText
- a variable to store error messages if the fetching fails

The Movie Page:
- a variable to store the movie data: movieData

Typings --> the types of the data coming from the API:
- a variable to store the movie data: movieData

In `MainPage.tsx`:
```diff
import React, { useState } from 'react'
import MovieList from './MovieList'
import Pagination from './Pagination'

export default function MainPage() {
+    const [movieList, setMovieList] = useState([])
+    const [currentPage, setCurrentPage] = useState(1)
+    const [pageTotal, setPageTotal] = useState(1)
+    const [searchText, setSearchText] = useState("Star Wars")
+    const [error, setError] = useState("");

    return (
        <div>
            <div>
                <input></input>
                <button>search</button>
            </div>
            <MovieList></MovieList>
            <Pagination></Pagination>
        </div>
    )
}
```

Follow the example above and add state to the components that you consider they need it. Pass the state to the children components as props when is needed.

### 2.2 Add `types` for the API Data

We also need to type the data that we receive from the API. to do so, add a `types.ts` file in your `src` folder and add the following:

```javascript
// API Response Types -- Added manually to use when fetching data
enum ResponseStatus {
    True = "True",
    False = "False"
}

type Movie = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}


type ApiResponse = {
    Search: Movie[],
    totalResults: string,
    Response: ResponseStatus.True
}

type ApiResponseNotFound = {
    Response: ResponseStatus.False,
    Error: string
}

// union type for the api response
type FullApiResponse = ApiResponse | ApiResponseNotFound

export type MovieRating = {
    Source: string,
    Value: string
}

export type ApiResponseGetMovie = {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: MovieRating[],
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string
}

```


## 3. Add functionality

Complete the implementation by adding functionality and tests.

3.1 Functionality

A bare bone implementation of the `Pagination.tsx` component example:
```javascript
import React from 'react'

// Props are specified as Typescript requires them
interface PaginationProps{
    pageTotal: number;
    currentPage:number;
    setCurrentPage: (page:number) => void
}

export default function Pagination({pageTotal, currentPage, setCurrentPage}:PaginationProps) {
    const pageNumberList = [];
    for(let i = 1; i < pageTotal; i++){ // generates the pages numbers
        pageNumberList.push(i)    
    }
    return (
        <div>
            <button onClick={() =>setCurrentPage(1)} >First</button>
            {pageNumberList.map(pageNr => {
                return <button onClick={() => setCurrentPage(pageNr)}>{pageNr}</button>
            })}
            <button onClick={() =>setCurrentPage(pageTotal)} >Last</button>
        </div>
    )
}
```

#### You do not need to the steps by the book. User your intuition, keep it simple and move forward.

3.2 Add tests for the simplest components:

3.2.1 Install the `react-testing-library` and `jest`:

```bash
npm install --save-dev jest typescript ts-jest @types/jest
npm install --save-dev @testing-library/react @testing-library/jest-dom
npx ts-jest config:init
```
And add `js-dom` as a test environment in `jest.config.js`:
```diff
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
+  testEnvironment: 'jsdom',
};
```

3.2.2 Add a test script:

```diff
"scripts": {
    "build": "webpack",
    "start": "webpack serve",
+    "test": "jest --watch"
},
```


3.2.2 Add your fist component test in `Pagination.spec.tsx`:

```javascript
// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from './Pagination'

test('loads and displays greeting', async () => {
  // Arrange
  const pageTotal = 10; // fake
  const currentPage = 2; // mock
  const setCurrentPage = jest.fn(); // spy
  render(<Pagination pageTotal={pageTotal} currentPage={currentPage} setCurrentPage={setCurrentPage}/>)

  // ACT
  fireEvent.click(screen.getByTestId('btn-first'));

  // ASSERT:
  expect(setCurrentPage).toHaveBeenCalledTimes(1);
  expect(setCurrentPage).toHaveBeenCalledWith(1);

  // Extend this test and test the full functionality

})
```

Follow best practices for `testing-library` and add `data-testid` to your components:
```diff
<div>
+    <button onClick={() =>setCurrentPage(1)} data-testid="btn-first">First</button>
    {pageNumberList.map(pageNr => {
        return <button key={pageNr} onClick={() => setCurrentPage(pageNr)}>{pageNr}</button>
    })}
    <button onClick={() =>setCurrentPage(pageTotal)}>Last</button>
</div>
```
See [more on component testing here](https://testing-library.com/docs/queries/bytestid).

#### Complete the rest by adding props and state. Keep simple, clean and write tests.


3.4 Add the data fetching logic:

You can add the data fetching using the effect hook:

```javascript
    // fetch all the movies and send the right query parameter in page and search 
    async function getMovies(){
        const url = `http://www.omdbapi.com/?s=${searchText}&apikey=YOUR_KEY&page=${currentPage}`
        const response = await fetch(url)
        console.log(response.status)
        if(response.status === 200){
            const data = await response.json() as FullApiResponse;
            if(data.Response === ResponseStatus.True ){
                setMovieList(data.Search)
                const pageTotalCalc = Math.ceil(parseInt(data.totalResults)/10);
                setPageTotal(pageTotalCalc)
            }else{
                setError(data.Error)
            }
        }else{
            // handle network error
            setError("network error")
        }

    }

    // trigger the fetch when the state currentPage changes and on componentDidMount
    useEffect(() => {
       getMovies()
    }, [currentPage]) // when current page changes, on did mount

```

**To test the data fetching you will need to add a `stub` for the `fetch` request.**

First, install a mock for `fetch`, as jest does not provide one and `msv` to stub the api endpoint:

```bash
npm install --save-dev whatwg-fetch msw
```

Here is an example for a test setup where the component data fetching provided by a stub:

```javascript
import React from 'react'
import 'whatwg-fetch' // needed as fetch is not injected by jest
import '@testing-library/jest-dom'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { setupServer } from 'msw/node'
import { rest } from 'msw'

import MoviePage from './MoviePage'
import { Movie, ApiResponseGetMovie } from '../types'


const movieResponse: ApiResponseGetMovie = {
    "Title": "Star Wars",
    "Year": "1977",
    "Rated": "PG",
    ....
}

// Stub for the fetch request
const server = setupServer(
    rest.get('http://www.omdbapi.com/*', (req, res, ctx) => {
        return res(ctx.json(movieResponse))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("Can fetch movie correctly", () => {
    test('loads and displays first page', async () => {
        render(
            <Router>
                <Switch>
                    <Route>
                        <MoviePage />
                    </Route>
                </Switch>
            </Router>)

        // ASSERT:
        await waitFor(() => screen.getByText('Star Wars'))
        expect(screen.getByTestId('display-year')).toHaveTextContent("1977");
   })
})
```

----

## 4. Add Styles 

You can use different options to add styles to the application. A widely used option is the [styled-components](https://styled-components.com/):

```bash 
npm install styled-components
npm i --save-dev @types/styled-components
```

Here is an example of usage:
```javascript
// Place in the same file as the original component at the bottom!
const PageNumbersContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.2rem;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #34ace0;
  color: white;
  border: 2px solid white;
  :hover{
    background: #227093;
    cursor: pointer;
  }
`
```

To get a color combination that fits ty [Flat Colours](https://flatuicolors.com/).

#### Congratulations, you have built your first app in React, fully tested and in the most efficient way!

----
### Extra Requirements:

1. Add a favorite movies functionalitty: users can add a movie to favorites and it will be remembered even if they reload the page

*HINT: Use a state management solution (we recommend `redux` so you practice with it) and perist the stae to local storage (`redux-persist`)*
=======
**You should see this in your browser:**
![linter-options](examples/app_preview.png)


## Step by Step Instructions

Follow the set of instructions bellow to setup a modern codebase for UI development and use React as frontend end library.


#### 1. Setting up `npm`
#### 2. Set up Webpack to bundle code
#### 3. Build for any browser with `Babel`
#### 4. Extending our tooling with Webpack plugins
#### 5. Adding React to leverage `JSX` and OOP with Components

------

## 1. Setting up `npm`

1. To use different packages we need to setup the package manager - `npm` in this folder:
    ```bash 
    npm init -y
    ```
2. Add a `.gitignore` file to leave the `node_modules` out of your commits:
    ```bash 
    echo "node_modules" > .gitignore 
    ```
    **Save the `.gitignore` file with the code editor to apply the changes.**

----

## 2. Set up Webpack to bundle  code

1. Install webpack as a development dependency by running:
    ```bash 
    npm install webpack --save-dev
    ```
2. Add an empty webpack configuration file:
    ```bash 
    echo "module.exports = {}" > webpack.config.js
    ```
----
3. Add an entry point to your `webpack.config.js` file:
    ```javascript 
    const path = require("path");

    module.exports = {
        entry: path.join(__dirname, "src/scripts.js"),
    }
    ```
----
4. Add an output configuration to the webpack file:
    ```javascript 
    const path = require("path");

    module.exports = {
        ...
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle.js",
        },
        mode: "production"
        ...
    }
    ```
    *Webpack will build a dependency tree based on our `exports/require` statements and compile into a single file.*
----
5. Add a script to build the application for production in the `package.json` file:
    ```javascript 
    module.exports = {
        ...
      "scripts": {
            ...,
            "build": "webpack"
        },
        ...
    }
    ```
----
6. Add `require/export` in you file so `webpack` can build you code:
    6.1 Add exports at the end of the `src/askQuestionSet.js` file:
    ```javascript

    ... 
    // This line at the bottom of the `src/askQuestionSet.js` file
    module.exports = askQuestionSet;
    ```
    6.2 Add an import to the top of `src/scripts.js` file:

    ```javascript
    // This line at the top of the `src/scripts.js` file
    const askQuestionSet = require("./askQuestionSet");

    ...
    ```
7. Run the `build` script and check the `/build` folder:
    ```bash 
    npm run build
    ```
----
8. Add the `/build` folder to the `.gitignore file`:
    ```bash 
    echo "build" >> .gitignore
    ```
    **Save the `.gitignore` file with the code editor to apply the changes.**
----
10. Replace the `script` references with a single one, generated by `webpack`:
```html
    <!-- Replace this -->
    <script src="./src/askQuestionSet.js"></script>
    <script src="./src/scripts.js"></script>

    <!-- With this -->
    <script src="./build/bundle.js"></script>
```

**Open the `index.html` file with live server and check it still works as expected.**

Congratulations! You are now using `Webpack` as a module bundler.

----

## 3. Build for any browser with `Babel`

*Given we now use webpack to bundle our code we can extend our workflow in many different ways. The most common one is to add `Babel` as a code transpiler so we can build for all the browsers but still use the latest `Javascript` features.*

Follow the instructions to add babel to your code base:

1. Install the `babel` loader for webpack by running:
    ```bash
    npm install -D babel-loader @babel/core @babel/preset-env webpack
    ```
---
2. Add the module configuration to your `webpack.config.js` file:
    ```javascript
    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: { // our code will be compatible with Internet Explorer 11
                    presets: [["@babel/preset-env", { "targets": "IE 11" }]]
                }
            }
            }
        ]
    }

    ```
    **The loader will be used by `webpack` any time a `.js` file is found. Webpack will now use babel to translate the code following the configuration.**
---
3. You can now use advanced features like the `ES6` modules in your code. To test it out:

    3.1 Replace the `common.js` export with an `es6` one in `src/askQuestionSet.js`:
    ```javascript
    // Replace:
    module.exports = askQuestionSet;

    // With:
    export default askQuestionSet;
    ```
    3.1 Replace the `common.js` import with an `es6` one in `src/scripts.js`:
    ```javascript
    // Replace:
    const askQuestionSet = require("./askQuestionSet.js");

    // With:
    import askQuestionSet from "./askQuestionSet.js";
  
    ```
---
4. Run the `build` script again and check the app:
    ```bash 
    npm run build
    ```
    Everything should work just as before.

----

## 4. Extending our tooling with Webpack plugins

Webpack offers many plugins to extend our workflow, optimize our code and improve the development experience.

1. Avoid caching by producing a **unique bundle name** every time:
    Change the following in your `webpack.config.js` file:
    ```diff
    output: {
        path: path.resolve(__dirname, "build"),
    -    filename: "bundle.js",
    +    filename: "[contenthash].bundle.js",
    },

    ```
2. Run `build` and check your build folder:
    ```bash 
    npm run build
    ```
    The new bundle should have a unique name:
    ![linter-options](examples/unique_hash_bundle.png)

**How can we add the unique name automatically to the `index.html` file?**

3. Install the [HTMLWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/):
    ```bash 
    npm install --save-dev html-webpack-plugin
    ```
4. Add the following to your `webpack.config.js` file:
    ```diff
    + const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        entry: path.join(__dirname, "src/scripts.js"),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[contenthash].bundle.js",
        },
    +   plugins: [new HtmlWebpackPlugin({
    +       template: path.join(__dirname, "public", "index.html")
    +   })],
        mode: "production",
        module: {
            rules: [
                {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { // our code will be compatible with Internet Explorer 11
                        presets: [["@babel/preset-env", { "targets": "IE 11" }]]
                    }
                }
                }
            ]
        }
    }
    ```
5. Create a public folder:
    ```bash 
    mkdir public
    ```

6. Move the `index.html` file to the public folder:
    ```bash 
    mv index.html public/index.html
    ```

7. Remove the `<script>` tag from the `.html` file:
    ```diff
        <h1>Software Mastery</h1>
        <button id="btn-one">Click Me</button>
    -   <script src="./build/bundle.js"></script>
    ```
8. Remove the `build` folder:
    ```bash 
    rm -rf build
    ```
9. Run `build` and check your build folder:
    ```bash 
    npm run build
    ```
    *You should see something like this:*
    ![html-output](examples/html_webpack_plugin_build.png)

**The plugin will add the generated bundles to the html file automatically:**
    ![script](examples/bundle_script.png)

----


## 5. Adding React to leverage `JSX` and OOP with Components
1. Add `react-presets` for babel as a dependency
    ```bash 
    npm install --save-dev @babel/preset-react
    ```
2. Add react presets to the babel config in the webpack file:
    ```diff

        mode: "production",
        module: {
            rules: [
                {
    +               test: /\.m?js|jsx$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: { // our code will be compatible with Internet Explorer 11
    +                   presets: ["@babel/preset-react", ["@babel/preset-env", { "targets":   "IE 11" }]]
                        }
                    }
                }
            ]
        }
    
    ```
3. Delete our old `code`as we will use `React` instead:
    ```bash 
    rm src/askQuestionSet.js
    rm src/scripts.js
    ```
4. Add `react` and `react-dom` as a dependency:
    ```bash 
    npm install react-dom react
    ```

4. Add the new `React` code:
    ```bash 
    touch src/index.jsx
    ```
    In the `src/index.jsx` file add:
    ```javascript
    import ReactDOM from "react-dom";
    import React from "react";

    class App extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello There! What is your name?</h3>
                <input></input>   
                <button onClick={() => alert("Hello")}>Say Hello</button>
            </div>
            );
        }
    }

    ReactDOM.render(
    <App/>,
    document.getElementById('root')
    );
    ```
5. Change the entry point in the `webpack.config.js` file:
    ```diff
    module.exports = {
    ...
    -    entry: path.join(__dirname, "src/scripts.js"),
    +    entry: path.join(__dirname, "src/index.jsx"),
    ...
    }
    ```

5. In the `public/index.html` file add:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        ...
    </head>
    <body> 
        <div id="root"></div>
    </body>
    </html>
    ```
5. Run the `build`, check the build folder and the browser:
    ```bash 
    npm run build
    ```

5. Add a development server to improve the experience:
    5.1 Extend the `webpack.config.js`:
    ```diff
    module.exports = {
    ...
    +    devServer: {
    +       port: 3000
    +},
    ...
    }
    ```
    5.2 Add a `dev` command to your `npm` scripts:
    ```diff 
    module.exports = {
        ...
    "scripts": {
            ...,
    +        "dev": "webpack serve"
        },
        ...
    }
    ```
5. Run the `dev` script and check the terminal and the browser:
    ```bash 
    npm run dev
    ```
    ![script](examples/dev_server.png)

#### Congratulations, you are now using `React` with your very own Babel and Webpack setup!
>>>>>>> solution

----

## Wrapping up

<<<<<<< HEAD
1. Set up a linter
2. Setup Git Hooks with Husky
3. Feel free to take the exercise further and experiment yourself with the setup

### Getting Help

If you have issues with the Action Item, you can ask for help in the [Community](https://community.theseniordev.com/) or in the [Weekly Q&A’s](https://calendar.google.com/calendar/u/0?cid=Y19kbGVoajU1Z2prNXZmYmdoYmxtdDRvN3JyNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t).

### Made with :orange_heart: in Berlin by @TheSeniorDev
=======
1. Make sure you push and commit your code
2. Set up a linter
3. Setup Git Hooks with Husky
4. Add `Typescript` using the [](ts-loader)
    4.1 Add the needed dependencies:
    ```bash
    npm install --save-dev typescript ts-loader
    ```
    4.2 Extend the webpack configuration:
    ```diff
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: { // our code will be compatible with Internet Explorer 11
                    presets: [["@babel/preset-env", { "targets": "IE 11" }]]
                }
            }  
        }
    +     {
    +        test: /\.tsx?$/,
    +         use: 'ts-loader',
    +        exclude: /node_modules/,
    +      },
        ],
    },
    ```
    4.3 Add a `tsconfig.json` file
    4.4 Change your files from `.jsx` to `.tsx` and you can now use static typing
5. Feel free to take the exercise further and experiment yourself with the setup


### Made with :orange_heart: in Berlin by @CodeWithDragos
>>>>>>> solution
