# Spotify Distribution Project

## **View what the website currently looks like here! https://bchh325.github.io/spotify-distribution/**
### **Backend repo: https://github.com/bchh325/graphify-server**

The end goal is for users to be able to view a data visualization of their genres in a given spotify playlist <br>
and interact with others who are also using the site at the same time.

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

## Planned Tasks (I always find something to add to this list)
* Conditionally render components based on login status
* Loading animations for code exchange and requesting resources
* Create appropriate data visualzations from user's selected data
* Figuring out when to issue new access tokens
* Requests to proxy to revoke sessions (logout)
* Create custom axios hook to handle HTTP requests
* Request songs based on playlist selection and create appropriate data visiualizations
