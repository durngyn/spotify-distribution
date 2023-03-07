# Spotify Distribution Project

## **View what the website currently looks like here! https://bchh325.github.io/spotify-distribution/**
Note: The currently deployment of the React site is extremely outdated, and it will most likely stay that way until deployment of the Node server, as people would not be able to use the currently deployed website without it anyway.

### **Backend repo: https://github.com/bchh325/graphify-server**

The end goal is for users to be able to view a data visualization of their genres in a given spotify playlist <br>
and interact with others who are also using the site at the same time.


### Server must be run locally until deployment. Sample .env files will be provided in the near future for you to run both the React app and the Node.js server with your own secrets for MongoDB and such.


<img src="https://i.imgur.com/G6jHVqp.png" alt="Landing page" width="100%" title="Landing page">

<img src="https://i.imgur.com/NsmhY5y.png" alt="Graph Page with actual data" width="100%" title="Graph page with actual data">

## Technologies I'm planning to use
* React
* Express/Node.js (BFF Proxy / Auth Code Flow w/ PKCE)
* Spotify Web API
* Spotify Web Playback SDK (Premium Spotify accounts only)
* WebSockets (Socket.io)
* MongoDB
* Deployment Options TBD

## Completed Tasks
* Sample UI Design
* Login component functionality and redirect to Spotify Authentication
* OAuth state comparisons before and after requests in callback route
* Exchanged auth_code and code_verifier for tokens stored in an httpOnly session cookie
* Retreived playlist data from proxy and rendered appropriate playlist names
* Retreived list of tracks based on playlist selection 
* Created custom axios hook to handle HTTP requests made to BFF proxy
* Successfully created genre distribution graph given a user's playlist 🥳

## Planned Tasks (I always find something to add to this list)
* Conditionally render components based on login status
* Loading animations for code exchange and requesting resources
* Create appropriate data visualzations from user's selected data
* Figuring out when to issue new access tokens
* Requests to proxy to revoke sessions (logout)
* Refactoring where the useAxios hook was used
* Styling bugs
* Sorting algorithm to order genres
