# SoundWave Project


Watch a project demonstration below:

https://user-images.githubusercontent.com/102702166/201738353-a6af545b-fa20-4a87-80cc-39b37b04883f.mp4



## Table of Contents

- Project Goals
- Built with
- How to use
- Challenges and Lessons Learned

## Project Goals

- Create a React web application that uses your knowledge of componsents, state and requests along with the Spotify API to build a website that allows users to authenticate with their spotify account,search their spotify library, create a custom playlist, then save it to their Spotify account.

- Project features:
    - **Spotify Login** - the first time a user searches for a song, album or artist, Spotify will ask them to login or set up a new account.
    - **Searh by Song, Album, or Artist** - a user can type the name of a song, artist, or album into the search bar and click the SEARCH button.
    - **Popuate Results List** - SoundWave displays the list of return tracks from the user's query.
    - **Add Song to a Custom Playlist** — users can add a track to their playlist by selecting a + sign on the right side of the track’s display container.
    - **Remove Song from Custom Playlist** — users can remove a track from their playlist by selecting a - sign on the right side of the track’s display container.
    - **Change Playlist Title** — users can change the title of their custom playlist.
    - **Save Playlist to Account** — users can save their custom playlist by clicking a button called SAVE TO SPOTIFY.

## Built with

- React 
- Git, Github
- Spotify API

## How to Use

### Application setup

- Create an application in your Spotify developer account at https://developer.spotify.com/dashboard/login

- Add your application url (localhost:3000 for example) to your application Redirect URIs.
Change your .env file REACT_APP_API_KEY to your application Client ID and REACT_APP_REDIRECT_URL to your application url.

- In the project directory, you can run:

### npm start
- Runs the app in the development mode.
- Open http://localhost:3000 to view it in your browser.
- The page will reload when you make changes.
You may also see any lint errors in the console.

### npm test
- Launches the test runner in the interactive watch mode.

- See the section about running tests for more information.

### npm run build
- Builds the app for production to the build folder.
- It correctly bundles React in production mode and optimizes the build for the best performance.

- The build is minified and the filenames include the hashes.

- Your app is ready to be deployed!

### Deployment

- See the section about **deployment** for more information here https://facebook.github.io/create-react-app/docs/deployment

### npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

