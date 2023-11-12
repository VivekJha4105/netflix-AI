# Netflix GPT Build-Track:

- Create React App
- TailwindCSS Loaded
- Header
- Routing
- Login Page
- Sing Up Form
- Form Validation
- useRef()
- Firebase Setup and Deployment
- Create User Registration/Authentication
- Created User Store as well as User Slice
- Implemented user sign in and sign out.
- Updated the user profile using the FIREBASE
- Updated data at the redux store and subscribe to them
- Bugfix: Fixed the issue with the user data not visible even after profile updating.
- Bugfix: Fixed the issue of user redirecting "/" to "/browse" page, if already logged in, and "/browse" to "/" page, if not logged in.
- Unsubscribed to the onAuthStateChanged callback. ( Using return statement inside useEffect hook. A good sanitary practice.)
- Adding hardcoded values to a constants file.
- Registered at TMDBs.
- Generated an API key/ access token and made an API call using it for now playing movies.
- Made a fetch call to get the nowPlayingMovies and added it to the state variable nowPlayingMovies of the redux store.
- Encapsulated the fetch call and the useEffect hook in custom hook.
- Divided the browse page to Main and Secondary container.
- Fetched the trailer video for the movie in Main Section and encapsulated the fetching business logic in a custom hook.
- Embedded the fetched trailer video and autoplayed it.
- Buit the secondary component with different movies lists.
- Built the movies cards to go into movies list.
- TMDB image URL.
- Built UI as close to Netflix.
- Encapsulated different API calls in custom hooks.
- UI of GPT Search Page.
- A search bar with links to the GPT Search for movies.
- Build in multi-language feature.
- Used a language constant file to store possible translations of all the visible string, in multiple languages, on the page.
- Built in a dynamic drop-down for language selection using a SUPPORTED_LANGUAGES array.
- Used redux store to save the current language as well as an action to change it.
- Used the OPENAI_API_KEY to search and recommend movies based on the prompt passed to it.
- Prompt should be such that result is produced in a desired manner.
- Results are again used to search the TMDB for movies matching that result.
- Search Results are added to the state variable in gptSlice and populated to the UI accordingly.
- MovieList component used again in order to display the results.
- Used memoaisation to prevent unnecessary API calls to the server.
- Used the .env file to store our API_KEYS and sesitive info.
- Included the .env file to gitignore file.
- Made our UI somewhat responsive, finishing touch required.

# Features:

- Login/SingUp Page
  - Singup/Login form
  - Redirect to browse Page
- Browse Page
  - Header
  - Hero Area
    - Contains Main Movie trailer
    - Movie Name and Description
  - Movie Lists
    - Based on Genre or any other factor
- Netflix GPT Page
  - Search Bar
  - Netflix Movie Suggestions.

# Issues:

- Scrollbar
- How to flex the movie cards better.
- Use carousel
- Add Shimmer UI/Loading Icon
- Make UI more responsive.
