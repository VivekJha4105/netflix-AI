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
